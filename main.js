/*function tocaSom (idElementoAudio) {
    document.querySelector(idElementoAudio).play()    
}


const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0
//enquanto
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador]
    const  instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`
    console.log(idAudio)
    tecla.onclick = function () {
        tocaSom(idAudio)
    }


    contador = contador + 1
    //onsole.log(contador)
}
*/



function tocaSom (seletorAudio) {
    const elemento = document.querySelector(seletorAudio)  
    if (elemento && elemento.localName === 'audio') {
            elemento.play()
    } else {
        console.log('Elemento não encontrado ou seletor inválido!')
    }
}


const listaDeTeclas = document.querySelectorAll('.tecla')

let contador = 0
//enquanto
for (let contador = 0; contador < listaDeTeclas.length; contador++) {
    const tecla = listaDeTeclas[contador]
    const  instrumento = tecla.classList[1]
    const idAudio = `#som_${instrumento}`
    //console.log(idAudio)
    tecla.onclick = function () {
        tocaSom(idAudio)
    }


    //contador = contador + 1
    //onsole.log(contador)

    tecla.onkeydown = function (evento) {  //apertar tecla
        if (evento.code === 'Space' || evento.code === 'Enter') {
            tecla.classList.add('ativa')
         }
    }

    tecla.onkeyup = function () {   //soltar tecla
        tecla.classList.remove('ativa')
    }
}



