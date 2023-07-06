const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2');
const app = express()
const fs = require('fs');
const cheerio = require('cheerio');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const path = require('path')
app.use('/assets', express.static('assets'))
app.use('/images', express.static('images'))
app.use('/pages', express.static('pages'))

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'luster',
});

connection.connect(function (err) {
    if (!err) {
        console.log("Conexão como o Banco realizada com sucesso!!!");
    } else {
        console.log("Erro: Conexão NÃO realizada", err);
    }
});

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html')
})

//Cadastro

app.post('/cadastro', (req, res) => {
    let email = req.body.email;
    let nome = req.body.name;
    let senha1 = req.body.pass;

    if (email.length > 1) {
        if (nome.length > 1) {
            if (senha1.length > 1) {
                connection.query("INSERT INTO usuario(email_usuario, nome_usuario, senha_usuario) VALUES ('" + email + "', '" + nome + "', '" + senha1 + "')",
                    function (err, rows, fields) {
                        if (err) {
                            console.log("Erro ao inserir no banco de dados:")
                            res.send("Erro ao cadastrar usuário", err)
                        } else {
                            console.log("Usuário cadastrado com sucesso:")
                            res.sendFile(__dirname + '/index.html')
                        }
                    }
                )
            } else {
                res.send("Senha não possui caracteres suficientes!")
            }
        } else {
            res.send("Nome não possui caracteres suficientes!")
        }
    } else {
        res.send("Email não possui caracteres suficientes!")
    }
})

//login

app.post('/login', (req, res) => {
    let username = req.body.mail;
    let password = req.body.senha;

    connection.query("SELECT * FROM usuario where email_usuario = '" + username + "'", function (err, rows, fields) {
        console.log("Results:", rows);
        if (!err) {
            if (rows.length > 0) {

                if (rows[0].senha_usuario === password) {
                    connection.query("SELECT saldo_usuario FROM usuario where email_usuario = '" + username + "'", function (error, results, fields) {
                        if (error) throw error;
                        const saldo = parseFloat(results[0].saldo_usuario);
                        const filePaths = ['index.html', 'pages/roleta.html', 'pages/compra.html', 'pages/gosverni.html', 'pages/dropdown.html']

                        filePaths.forEach(function (filePath) {
                            fs.readFile(filePath, 'utf8', function (error, data) {
                                if (error) throw error;

                                // Carrega o HTML usando o cheerio
                                const $ = cheerio.load(data);

                                // Encontra a tag <p> com o id "header-saldo" e altera seu conteúdo
                                $('#login').text(`Seja bem-vindo, ${rows[0].nome_usuario}!`);
                                $('#header-saldo').text(`R$ ${saldo}`);

                                // Obtém o HTML modificado
                                const htmlModificado = $.html();

                                fs.writeFile(filePath, htmlModificado, 'utf8', function (error) {
                                    if (error) throw error;
                                });
                            });
                        })
                        res.sendFile(__dirname + '/' + filePaths[0]);
                    });
                } else {
                    res.send('Senha incorreta');
                }

            } else {
                res.send('Login Falhou - Usuário não cadastrado');
            }
        } else {
            console.log("Erro: Consulta não realizada", err);
            res.send('Login failed');
        }
    });
});

//recarga
app.post('/recarga', (req, res) => {
    let gmail = req.body.gmail
    let passe = req.body.passe
    let valor = req.body.valor

    connection.query("SELECT * FROM usuario where email_usuario = '" + gmail + "'", function (err, rows, fields) {
        console.log("Results:", rows);
        if (!err) {
            if (rows.length > 0) {

                if (rows[0].senha_usuario === passe) {
                    connection.query("UPDATE `usuario` SET `saldo_usuario` = `saldo_usuario` + " + valor + " WHERE email_usuario = '" + gmail + "'", function (error, results, fields) {
                        if (!error) {
                            if (error) throw error;
                            connection.query("SELECT saldo_usuario FROM usuario where email_usuario = '" + gmail + "'", function (error, results, fields) {
                                if (error) throw error;
                                const saldo = parseFloat(results[0].saldo_usuario);
                                const filePaths = ['index.html', 'pages/roleta.html', 'pages/compra.html', 'pages/gosverni.html', 'pages/dropdown.html']

                                filePaths.forEach(function (filePath) {
                                    fs.readFile(filePath, 'utf8', function (error, data) {
                                        if (error) throw error;

                                        // Carrega o HTML usando o cheerio
                                        const $ = cheerio.load(data);

                                        // Encontra a tag <p> com o id "header-saldo" e altera seu conteúdo
                                        $('#header-saldo').text(`R$ ${saldo}`);

                                        // Obtém o HTML modificado
                                        const htmlModificado = $.html();

                                        fs.writeFile(filePath, htmlModificado, 'utf8', function (error) {
                                            if (error) throw error;
                                        });
                                    });
                                })
                                res.sendFile(__dirname + '/' + filePaths[0]);
                            });
                        }
                    }
                    )
                } else {
                    res.send('Senha incorreta');
                }

            } else {
                res.send('Usuário não cadastrado');
            }
        } else {
            console.log("Erro: Consulta não realizada", err);
            res.send('Recarga falhou!');
        }
    });
})

//Compra

app.post('/compra', (req, res) => {
    let email = req.body.email
    let cep = req.body.cep
    let num = req.body.numero
    let cup = req.body.cupom

    if (cep.length > 1) {
        if (num.length > 0) {
            if (email.length > 1) {
                connection.query("UPDATE `usuario` SET `saldo_usuario` = `saldo_usuario` - 999 WHERE `email_usuario` = '" + email + "';",
                function(err,rows,fields){
                    if (!err){
                        connection.query('SET @valor_consulta := NULL;', (error, results) => {
                            if (error) throw error;
        
                            connection.query("SELECT id_usuario INTO @valor_consulta FROM usuario WHERE email_usuario = '" + email + "';", (error, results) => {
                                if (error) throw error;
        
                                connection.query("INSERT INTO compra (id_fk_usuario, fk_id_produto, quantidade) VALUES (@valor_consulta, 1, 1);",
                                    function (err, rows, fields) {
                                        if (!err) {
                                            connection.query("SELECT saldo_usuario FROM usuario where email_usuario = '" + email + "'", function (error, results, fields) {
                                                if (error) throw error;
                                                const saldo = parseFloat(results[0].saldo_usuario);
                                                const filePaths = ['index.html', 'pages/roleta.html', 'pages/compra.html', 'pages/gosverni.html', 'pages/dropdown.html']
                
                                                filePaths.forEach(function (filePath) {
                                                    fs.readFile(filePath, 'utf8', function (error, data) {
                                                        if (error) throw error;
                
                                                        // Carrega o HTML usando o cheerio
                                                        const $ = cheerio.load(data);
                
                                                        // Encontra a tag <p> com o id "header-saldo" e altera seu conteúdo
                                                        $('#header-saldo').text(`R$ ${saldo}`);
                
                                                        // Obtém o HTML modificado
                                                        const htmlModificado = $.html();
                
                                                        fs.writeFile(filePath, htmlModificado, 'utf8', function (error) {
                                                            if (error) throw error;
                                                        });
                                                    });
                                                })
                                                res.sendFile(path.join(__dirname, 'pages', 'compraconcluida.html'));
                                            });
                                        } else {
                                            console.log("Erro: Consulta não realizada", err);
                                            res.send('Usuário não cadastrado!');
                                        }
                                    });
                            });
                        });
                    }else{
                        res.send('Compra falhou!')
                    }
                });
            } else {
                res.send("E-mail não possui caracteres suficientes!")
            }
        } else {
            res.send("Numero não possui caracteres suficientes!")
        }
    } else {
        res.send("CEP não possui caracteres suficientes!")
    }
})

app.listen(3010, () => {
    console.log('Servidor rodando na porta 3010!')
})
