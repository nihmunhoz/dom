
function mudarCor(){
    //obter o elemento quadrado
    let quadrado = document.getElementById('quadrado')

    //modificando elemento
    quadrado.style.backgroundColor = 'red'
}

function mudarForma(){
    let quadrado = document.getElementById('quadrado')

    quadrado.style.borderRadius = '50%'
}

function diminuir(){
    let quadrado = document.getElementById('quadrado')

    quadrado.style.scale = '30%'
}

function aumentar(){
    let quadrado = document.getElementById('quadrado')

    quadrado.style.scale = '1.5'
}

function girar(){
    let quadrado = document.getElementById('quadrado')

    quadrado.style.rotate = '40deg'
}

function surpresa(){
    let quadrado = document.getElementById('quadrado')

    quadrado.style.backgroundImage = 'url(https://s2.glbimg.com/MU_HOBQHWW68xx07g9NWMS4QQwg=/e.glbimg.com/og/ed/f/original/2021/11/30/giphy_1.gif)'
    quadrado.style.backgroundSize = '100% 100%'
    quadrado.style.borderRadius = '50%'
    quadrado.style.border = 'none'
}

function voltar(){
    let quadrado = document.getElementById('quadrado')

    quadrado.style.backgroundColor = 'lightblue'
    quadrado.style.borderRadius  = '0'
    quadrado.style.scale = '1'
    quadrado.style.rotate = '0deg'
    quadrado.style.backgroundImage = 'none'
    quadrado.style.border = 'solid 2px black'
}