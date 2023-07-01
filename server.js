const express = require('express')
const bodyParser = require('body-parser')
const mysql = require('mysql2');
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const path = require('path')
app.use('/assets', express.static('assets'))
app.use('/images', express.static('images'))
app.use('/pages', express.static('pages'))

const connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'luster',
});

connection.connect(function(err) {
    if (!err) {
        console.log("Conexão como o Banco realizada com sucesso!!!");
    } else {
        console.log("Erro: Conexão NÃO realizada", err);
    }
});

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.post('/login', (req, res) => {
    let username = req.body.mail;
    let password = req.body.senha;

    connection.query("SELECT * FROM usuario where email_usuario = '" + username + "'", function(err, rows, fields) {
        console.log("Results:", rows);
        if (!err) {
            if (rows.length > 0) {

                if (rows[0].senha_usuario === password) {
                    res.send('Login com Sucesso!!!');
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
app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000!')
})

//Cadastro

  app.post('/cadastro', (req, res) => {
    let email = req.body.mail;
    let nome = req.body.nome;
    let senha1 = req.body.senha;
  
    connection.query("INSERT INTO usuario(email_usuario, nome_usuario, senha_usuario) VALUES ('" + email + "', '" + nome + "', '" + senha +"')",
      function (err, rows, fields) {
        if (err) {
          console.log("Erro ao inserir no banco de dados:", err);
          res.send("Erro ao cadastrar usuário", err);
        } else {
          console.log("Usuário cadastrado com sucesso:", rows);
          res.redirect('http://localhost:3000/login');
        }
      }
    );
  });