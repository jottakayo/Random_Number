alert("Boas vindas ao jogo Nº Secreto.")//Alerta de boas vindas.
let secretNumber = 24;//Guarda o numero secreto.
console.log(secretNumber);
let chosenNumber;//Numero escolhido pelo usuário.
let attempts = 1;//Tentativas do usuário.


while(chosenNumber != secretNumber){
    let chosenNumber = prompt("Escolhe ai um numero de 1 á 50 !");
    if (chosenNumber == secretNumber ) {
        break
    }else{
        if (chosenNumber > secretNumber) {
            alert(`errou miseravi, o numero certo é menor que ${chosenNumber} que você escolheu !`)
        }else{
            alert(`errou miseravi, o numero certo é maior que ${chosenNumber} que você escolheu !`)
        }
        //attempts = attempts + 1;
        attempts++;//Armazena o numero de tentativas do usuário.
    }
}
//Operador ternário
let wordAttempts = attempts > 1 ? 'tentativas' : 'tentativa';//Ajusta a palavra tentativa para tentativa caso seja o nº 1.

alert(`Acertou miseravi , você acertou o numero secreto ${secretNumber} com ${attempts} ${wordAttempts} !`);


// if (attempts = 1){
// alert(`Acertou miseravi , você acertou o numero secreto ${secretNumber} com ${attempts} tentativa !`)
// } else {
//     alert(`Acertou miseravi , você acertou o numero secreto ${secretNumber} com ${attempts} tentativas !`)
// }

