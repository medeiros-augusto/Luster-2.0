const wheel = document.querySelector('.wheel'); // Seleciona o elemento da roda
const btn = document.querySelector('.botaogira'); // Seleciona o elemento do botão
const input = document.querySelector('#input-value'); // Seleciona o elemento do input

let current = 0; // Variável para armazenar a posição atual da roda
let selectedColor = ''; // Variável para armazenar a cor selecionada

function spinWheel() {
    if (selectedColor === '') {
        alert('Selecione uma cor antes de girar!');
        return;
    }

    const rotate = Math.floor(Math.random() * 360) + 720; // Gera um valor aleatório de rotação
    const angle = current + rotate; // Calcula o ângulo final da roda
    wheel.style.transform = `rotate(${angle}deg)`; // Aplica a transformação de rotação na roda

    current = angle; // Atualiza a posição atual da roda

    btn.disabled = true; // Desabilita o botão temporariamente
    wheel.addEventListener('transitionend', () => { // Adiciona um listener de evento de transição na roda
        btn.disabled = false; // Habilita o botão novamente após a transição finalizar
        const winningColor = getWinningColor(angle % 360); // Obtém a cor vencedora com base no ângulo resultante

        if (winningColor === selectedColor) {
            const inputValue = Number(input.value); // Obtém o valor inserido no input convertendo para número
            const result = calculateResult(selectedColor, inputValue); // Calcula o resultado com base na cor selecionada e no valor inserido

            alert(`Você ganhou R$ ${result}!`); // Exibe um alerta com a pontuação obtida
        } else {
            var inputValue = Number(input.value);
            alert('Você perdeu R$ ' + inputValue + '! Tente novamente.');
        }
    }, { once: true }); // Remove o listener de evento após ser acionado
}

// Função para selecionar uma cor
function red() {
    selectedColor = 'red';
}

function green() {
    selectedColor = 'green';
}

function yellow() {
    selectedColor = 'yellow';
}

function getWinningColor(angle) { // Função para obter a cor vencedora com base no ângulo
    if (angle >= 0 && angle < 90) {
        return 'red'; // Retorna 'red' para ângulos entre 0 e 90
    } else if (angle >= 90 && angle < 180) {
        return 'yellow'; // Retorna 'green' para ângulos entre 90 e 180
    } else if (angle >= 180 && angle < 270) {
        return 'red'; // Retorna 'blue' para ângulos entre 180 e 270
    } else {
        return 'green'; // Retorna 'yellow' para ângulos maiores ou iguais a 270
    }
}

function calculateResult(color, inputValue) { // Função para calcular o resultado com base na cor e no valor inserido
    let multiplier = 1; // Inicializa o multiplicador com 1

    if (color === 'red') { // Se a cor for 'red'
        multiplier = 2; // O multiplicador é 2
    } else if (color === 'green') { // Se a cor for 'green'
        multiplier = 5; // O multiplicador é 5
    } else if (color === 'yellow') { // Se a cor for 'yellow'
        multiplier = 5; // O multiplicador é 2
    }
    return inputValue * multiplier;
}