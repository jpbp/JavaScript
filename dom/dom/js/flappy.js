function novoElemento(tag,className){
    const element = document.createElement(tag)
    element.className=className
    return element
}

function criaBarreira(reversa=false){
    this.elemento=novoElemento('div','barreira')
    const borda = novoElemento('div','borda')
    const corpo = novoElemento('div','corpo')
    this.elemento.appendChild(reversa ? corpo : borda)
    this.elemento.appendChild(reversa ? borda : corpo)
    this.setAltura = altura => corpo.style.height= `${altura}px`
}
function parDeBarreiras(altura,abertura,x){
    this.elemento=novoElemento('div','par-de-barreiras')

    this.superior = new criaBarreira(true)
    this.inferior = new criaBarreira(false)

    this.elemento.appendChild(this.superior.elemento)
    this.elemento.appendChild(this.inferior.elemento)

    this.sortiarAbertura= () => {
        const alturaSuperior=Math.random() * (altura-abertura)
        const alturaInferior = altura -abertura -alturaSuperior
        console.log(alturaSuperior,alturaInferior)
        this.superior.setAltura(alturaSuperior)
        this.inferior.setAltura(alturaInferior)
    }
    this.getX = () => parseInt(this.elemento.style.left.split('px')[0])
    this.setX = x => this.elemento.style.left=`${x}px`
    this.getLargura= () => this.elemento.clientWidth

    this.sortiarAbertura()
    this.setX(x)
}
function criarPonto(){
    this.elemento=novoElemento('div','progresso')
    this.elemento.innerHTML=0
    this.notificaPonto = () => {
        this.elemento.innerHTML++
    }
}

function barreiras(altura,largura,abertura,espaco,ponto){
    this.pares=[
        new parDeBarreiras(altura,abertura,largura),
        new parDeBarreiras(altura,abertura,largura+espaco),
        new parDeBarreiras(altura,abertura,largura+espaco*2),
        new parDeBarreiras(altura,abertura,largura+espaco*3)
    ]
    const deslocamento = 3
    this.animar=()=>{
        this.pares.forEach(par => {
            par.setX(par.getX()-deslocamento)


            //quando o elenmento sair da tela
            if(par.getX() < -par.getLargura()){
                par.setX(par.getX()+espaco* this.pares.length )
                par.sortiarAbertura()
            }

            const meio = largura/2
            const cruzouMeio=par.getX()+ deslocamento>=meio && par.getX()< meio
            if(cruzouMeio) {
                ponto.notificaPonto()
        }
        })
    } 
}

function Passaro(alturaJogo){
    let voando=false
    this.elemento=novoElemento('img','passaro')
    this.elemento.src='imgs/lupito.jpeg'
    this.getY= () => parseInt(this.elemento.style.bottom.split('px')[0])
    this.setY= y => this.elemento.style.bottom=`${y}px`

    window.onmousedown = e => voando=true
    window.onmouseup = e => voando=false
    this.animar = () => {
        const novoY = this.getY() + (voando ? 8 : -5)
        const alturaMaxima = alturaJogo-this.elemento.clientHeight

        if(novoY <= 0){
            this.setY(0)
        }else if(novoY>= alturaMaxima){
            this.setY(alturaMaxima)
        }else{
            this.setY(novoY)
        }
    }
    this.setY(alturaJogo/2)
}

function estaoSobrepostos (elementoA,elementoB){
    const a=elementoA.getBoundingClientRect()
    const b=elementoB.getBoundingClientRect()
    const horizontal = a.left + a.width >= b.left && b.left+b.width >= a.left
    const vertical = a.top +a.height >=b.top && b.top + b.height>=a.top
    console.log('teste',horizontal && vertical)
    return horizontal && vertical
}

function colidiu (passaro,barreiras){
    let colidiu = false
    barreiras.pares.forEach(parDeBarreiras => {
        if(!colidiu){
            const superior = parDeBarreiras.superior.elemento
            const inferior = parDeBarreiras.inferior.elemento
            colidiu = estaoSobrepostos(passaro.elemento,superior) || estaoSobrepostos(passaro.elemento,inferior)
        }
    })
    return colidiu
}

function flappyBird (){
    const areaJogo = document.querySelector('[wm-flappy]')
    const altura =areaJogo.clientHeight
    const largura = areaJogo.clientWidth
    const pontoJogo =new  criarPonto()
    const barreirasJogo = new barreiras(altura,largura,300,400,pontoJogo)
    const passaro =  new Passaro(400)
    areaJogo.appendChild(pontoJogo.elemento)
    areaJogo.appendChild(passaro.elemento)
    barreirasJogo.pares.forEach(par => areaJogo.appendChild(par.elemento))
    this.start= () =>{
        // loop 
        const temp = setInterval(()=>{
            barreirasJogo.animar()
            passaro.animar()
            if(colidiu(passaro,barreirasJogo)){
                console.log(colidiu(passaro,barreirasJogo))
                clearInterval(temp)
                
            }
        },20)

    }
    
}

new flappyBird().start()

