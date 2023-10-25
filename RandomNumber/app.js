// function startGame() {
// alert("Boas vindas ao jogo Nº Secreto.")//Alerta de boas vindas
// let secretNumber = parseInt(Math.random() * 50 + 1);//Gera um numero aleatório com o atributo Math.random
// console.log(secretNumber);
// let chosenNumber;//Numero escolhido pelo usuário
// let attempts = 1;//Tentativas do usuário

// // Loop para até o jogador acerte o numero randômico
// while(chosenNumber != secretNumber){
//     let chosenNumber = prompt("Escolha entre 1 e 50.");
//     // Converte a escolha do jogador para número inteiro
//         chosenNumber = parseInt(chosenNumber);
//     if (chosenNumber == secretNumber ) {
//         break
//     }else{
//         if (chosenNumber > secretNumber) {
//             alert(`Você errou o numero, o numero certo é menor que ${chosenNumber} que você escolheu !`)
//         }else{
//             alert(`Você errou o numero, o numero certo é maior que ${chosenNumber} que você escolheu !`)
//         }
//         attempts++;//Armazena o numero de tentativas do usuário.
//     }
// }

// let wordAttempts = attempts > 1 ? 'tentativas' : 'tentativa';//Ajusta a palavra tentativa para tentativa caso seja o nº 1.
// // Atualiza o resultado na página HTML
// document.getElementById("result").textContent = `Você acertou o numero secreto ${secretNumber} com somente ${attempts} ${wordAttempts} !`;
// }

let secretNumber = generateSecretNumber();
console.log(secretNumber);

let attempts = 1;
//Função para mudar o texto em html
function printText(tag, text){//Função com 2 parâmetros para imprimir textos na tag HTML
    let camp = document.querySelector(tag);
    camp.innerHTML = text;
}
startMessageGame();

//Função que checa o numero gerado pelo usuário e compara com o secreto
function checkKick () {
    let kick = document.querySelector('input').value//Método querySelector para buscar valor de inout
    console.log(kick == secretNumber);
        //Logica para determinar o numero secreto correto
        if ( kick == secretNumber){
            let wordAttempts = attempts > 1 ? 'tentativas' : 'tentativa';
            printText('h1', 'Você <span class="container__text-blue">acertou</span> !');
            printText('h2', `Você acertou o numero secreto ${secretNumber} com ${attempts} ${wordAttempts}.`);
            document.getElementById('reiniciar').removeAttribute('disabled');
        } else {
            if ( kick > secretNumber ){ 
                printText('h1', 'Você errou, tente <span class="container__text-blue">novamente</span> !');
                printText('h2', `O numero secreto é menor.` )  
        } else {
            printText('h1', 'Você errou, tente <span class="container__text-blue">novamente</span> !');
            printText('h2', `O numero secreto é maior.`)
        }
           attempts++;
    }
}
//Função para gera um numero secreto
function generateSecretNumber() {
    return parseInt(Math.random() * 50 + 1);
}
//Mensagem inicial do jogo
function startMessageGame(){
    printText('h1', 'Jogo do numero <span class="container__text-blue">secreto</span>');
    printText('h2', 'Vamos ver como você se sai !.');
}
//função para deixa vazio o input do kick
function cleanKick(){
    kick = document.querySelector('input');
    kick.value = ''; 
}
//Criar função para reiniciar o jogo
function reloadGame() {
    secretNumber = generateSecretNumber();
    console.log(secretNumber);
    startMessageGame();
    attempts = 1;
    cleanKick();
}