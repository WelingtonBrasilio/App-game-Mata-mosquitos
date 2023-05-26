

let altura = 0
let largura = 0

//Tamanho da tela de exibição do jogo
function telaJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
}

telaJogo()

//Define a posição do mosquito na tela
function posicaoMosquito(){
    //remove o mosquito anterior caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()
    }

    let posicaoX = Math.floor(Math.random() * largura) - 90
    let posicaoY = Math.floor(Math.random() * altura) - 90

    posicaoX = posicaoX < 0 ? 0 : posicaoX
    posicaoY = posicaoY < 0 ? 0 : posicaoY

    console.log(posicaoX, posicaoY)

    //Cria o mosquito randomico na tela
    let mosquito = document.createElement('img')
    mosquito.src = 'Assets/img/mosquito.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = posicaoX + 'px'
    mosquito.style.top = posicaoY + 'px'
    mosquito.style.position = 'absolute'
    mosquito.id = 'mosquito'

    document.body.appendChild(mosquito)

    
}

//Tamanhos dos mosquitos exibidos
function tamanhoAleatorio(){
    let classe = Math.floor(Math.random() * 3)
    
    switch(classe){
        case 0:
            return 'mosquito'
        case 1:
            return 'mosquitoMedio'
        case 2:
            return 'mosquitoGrande'
    }
}

function ladoAleatorio(){
    let classe = Math.floor(Math.random() * 2)
    
    switch(classe){
        case 0:
            return 'ladoA'
        case 1:
            return 'ladoB'
    }
}
