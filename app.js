let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = getRandomNumber();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
  let campo = document.querySelector(tag);
  campo.innerHTML = texto;
  responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate: 1.2});
}

function exibirMensagemInicial(){
  exibirTextoNaTela('h1', "Jogo do Número Secreto");
  exibirTextoNaTela('p', "Selecione um número entre 1 e 10");
}

exibirMensagemInicial();

function verificarChute(){
  let chute = document.querySelector("input").value;
  if(numeroSecreto == chute){
    exibirTextoNaTela('h1', "Acertou!");
    let palavraTentativas = tentativas > 1? "tentativas" : "tentativa";
    let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativas}!`;
    exibirTextoNaTela('p', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  }else{
    if(numeroSecreto> chute){
      exibirTextoNaTela('p', "O número secreto é maior");
    }else{
      exibirTextoNaTela('p', "O número secreto é menor");
    }
    tentativas++;
    limparChute();
  }
}

function getRandomNumber(){
  let numeroEscolhido = parseInt(Math.random() * numeroLimite +1 );
  let qtdElementosNaLista = listaDeNumerosSorteados.length;
  if(qtdElementosNaLista == numeroLimite){
    listaDeNumerosSorteados = [];
  }
  if(listaDeNumerosSorteados.includes(numeroEscolhido)){
    return getRandomNumber();
  }else{
    listaDeNumerosSorteados.push(numeroEscolhido);
    console.log(listaDeNumerosSorteados);
    return numeroEscolhido;
  }
}

function limparChute(){
  let chute = document.querySelector("input");
  chute.value = "";
}

function reiniciar(){
  exibirMensagemInicial();
  limparChute();
  tentativas = 1;
  numeroSecreto = getRandomNumber();
  document.getElementById('reiniciar').setAttribute('disabled', true);
}
