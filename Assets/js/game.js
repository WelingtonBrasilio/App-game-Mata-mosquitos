let altura = 0
let largura = 0
let vidas = 1
let tempo = 10
let criaMosquitoTempo = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
    //1500
    criaMosquitoTempo = 1500
} else if(nivel === 'dificil'){
    //1000
    criaMosquitoTempo = 1000
} else if(nivel === 'chucknorris'){
    //750
    criaMosquitoTempo = 750
}

//Tamanho da tela de exibição do jogo
function telaJogo(){
    altura = window.innerHeight
    largura = window.innerWidth
}

telaJogo()

var cronometro = setInterval(() => {

    tempo -= 1
    if(tempo < 0){
        clearInterval(cronometro)
        clearInterval(criaMosquito)
        window.location.href = 'vitoria.html'
    }else{
    document.getElementById('cronometro').innerHTML = tempo }
}, 1000);


//Define a posição do mosquito na tela
function posicaoMosquito(){
    //remove o mosquito anterior caso exista
    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

        //remove coração caso o mosquito não seja eliminado pelo jogador
        if(vidas > 3){
            window.location.href = 'derrota.html'
        }else{
        document.getElementById('v' + vidas).src="Assets/img/coracao_vazio.png"
        vidas++

        }
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
    mosquito.onclick = function(){
        this.remove()
    }

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
