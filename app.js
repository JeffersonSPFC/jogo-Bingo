
// Mensagem de Texto na tela;
function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
} 

mensagemInicial();

// Mensagem  Inicial Na Tela;
function mensagemInicial(){
exibirTextoNaTela("h1", "Jogo do Número Secreto.");
exibirTextoNaTela("p", "Escolha entre um número entre 1 e 10");
}
// QUando escolhe o número;
function verificarChute (){
    let chute = document.querySelector("input").value;

    if(chute == numeroBingo){
        exibirTextoNaTela('h1', `Bingo!.`);
        exibirTextoNaTela('p', `${mensagemTentativas}`);
        let tentativas = tentativa > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Parabéns, Você acertou! com ${tentativa} ${tentativas}!.`;
        
        document.getElementById('reiniciar').removeAttribute('abled');
        reiniciarJogo();

    } else{
        if(chute > numeroBingo){
        exibirTextoNaTela('p','O número secreto é menor que o chute.');
        } else{
            exibirTextoNaTela('p','O número secreto é maior que o chute.');
        }
        tentativa ++;
        limparCampo();
}
    }

let tentativa = 1;
let listaNumeroSorteados = [];
let numeroMax = 10;
let numeroBingo = numeroAleatorio();

function numeroAleatorio(){
    let numeroChutado = (parseInt( Math.random()* numeroMax +1));
    let tamanhoDaLista = listaNumeroSorteados.length;

    if(tamanhoDaLista == numeroMax){
        listaNumeroSorteados = [];
    }
    if (listaNumeroSorteados.includes(numeroChutado)){
        return numeroAleatorio();
    } else {
        listaNumeroSorteados.push(numeroChutado);
        console.log (listaNumeroSorteados);
        return numeroChutado;
    }
}
function limparCampo(){
    chute = document.querySelector("input");
    chute.value = "";
}
function reiniciarJogo(){
    numeroBingo = numeroAleatorio();
    limparCampo();
    mensagemInicial();
    document.getElementById('reiniciar').setAttribute('abled', true);
    tentativa = 1;
}