// função para alterar a cor do backgroun do circulo 
function trocaCor(cor) {

    //Seleciona o primeiro elemento HTML com a classe circulo e o armazena na variável circulo
  let circulo = document.querySelector(".circulo");

  //Define a propriedade de estilo background do elemento circulo para a cor passada como argumento. Isso altera a cor de fundo do elemento.
  circulo.style.background = cor;
}

//função para trocar a imagem 
function trocaImagem(imagem) {
    //Seleciona o primeiro elemento HTML com a classe celular e o armazena na variável imgCelular
  let imgCelular = document.querySelector(".celular");
  
  //Define a propriedade src do elemento imgCelular para o caminho da nova imagem. Isso altera a imagem exibida pelo elemento.
  imgCelular.src = imagem;
}

/*OBS passamos no onclik para o HTML as duas funções com parametros, ou seja, 
ao clicar no botão azul ele vai recebar  a cor de fundo (azul) 
e a imagem (do cel azul) que pasamos */