//Declaração de variáveis globais
let listNumber = [];
let secretNumber = generateSecretNumber();
let attempts = 1;

startMessageGame();

//Função para mudar o texto em html
function printText(tag, text){
    let camp = document.querySelector(tag);
    camp.innerHTML = text;
}

//Mensagem inicial do jogo
function startMessageGame(){
    printText('h1', 'Jogo do Palpite <span class="container__text-blue">Certo</span>');
    printText('h2', 'Vamos ver como você se sai !.');
}
//função para deixa vazio o input do kick, utilizada na função reloadGame()
function cleanKick(){
    kick = document.querySelector('input');
    kick.value = ''; 
}
//Função para reiniciar o jogo
function reloadGame() {
    secretNumber = generateSecretNumber();
    console.log(secretNumber);
    startMessageGame();
    attempts = 1;
    cleanKick();
    document.getElementById('reload').setAttribute('disabled', true);//Com esse method(setAttribute) é necessário dar 2 parâmetros, sendo o segundo se você quer o atributo escolhido on or off.
}

//Função para gera um numero secreto
function generateSecretNumber() {
    let chosenNumber = parseInt(Math.random() * 10 + 1);
    //Verificação para que o numero aleatório não seja repetido
    if (listNumber.includes(chosenNumber)){//includes é um método para verificar se existe ja aquele conteúdo no array, retornando true or false
        return generateSecretNumber();
    }else{
        listNumber.push(chosenNumber);//Push para incluir o numero no array
        console.log(listNumber);
        return chosenNumber;
    }
}

//Função que checa o numero gerado pelo usuário e compara com o secreto
function checkKick () {
    let kick = document.querySelector('input').value//Método querySelector para buscar valor de input
    console.log(kick == secretNumber);
        //Logica para determinar o numero secreto correto
        if ( kick == secretNumber){
            let wordAttempts = attempts > 1 ? 'tentativas' : 'tentativa';
            printText('h1', 'Você <span class="container__text-blue">acertou</span> !');
            printText('h2', `Você acertou o numero secreto com ${attempts} ${wordAttempts}.`);
            document.getElementById('reload').removeAttribute('disabled');
        } else {
            //If para dar dicas do numero correto
            if ( kick > secretNumber ){ 
                printText('h1', 'Tente <span class="container__text-blue">novamente</span> !');
                printText('h2', `O numero secreto é menor.` )  
        } else {
            printText('h1', 'Tente <span class="container__text-blue">novamente</span> !');
            printText('h2', `O numero secreto é maior.`)
        }
        //Contador de tentativas
        attempts++;
    }
}