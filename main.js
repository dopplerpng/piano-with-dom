// lógica passo a passo
// usando o querySelectorAll para pegar todas as teclas
const keys = document.querySelectorAll('.key') 

// play notes 
//Está função irá receber outras funções, no caso será recursiva
function playNote(event){

    //keyCode - para identificar cada id da tecla e do click, criei está função
		//que verrifica se o event.type é um keydoon, se for, a const criada na função
		//receberá o id da tecla, se não a const irá receber o id do click
    let audioKeyCode = getKeyCode(event)

    //typed or pressed key - criei essa const para verificar se a tecla/click
		//se encontra nos id pré definidos do piano
    const key = document.querySelector(`.key[data-key="${audioKeyCode}"]`)
    
    //if  key exists - aqui verificando se existe
    const cantFoundAnyKey = !key
    if(cantFoundAnyKey){
        return
    }

    //play audio
    playAudio(audioKeyCode) //está função irá pegar o id da tecla/clique pressionado
		//e instanciar a função play para a tecla ser tocada
}   
function playAudio(event){
    const audio = document.querySelector(`audio[data-key="${event}"]`)
    audio.currentTime = 0;
    audio.play()
}
function getKeyCode(event){
    const isKeyboard = event.type === "keydown"

    if(isKeyboard){
        keyCode = event.keyCode
    }else{
        keyCode = event.target.dataset.key
    }
    

    return keyCode
}

// click with mouse - adicionando o eventListener para cada key e passando como
// parâmetro a função playNote
keys.forEach((tecla)=>{
    tecla.addEventListener("click", playNote)
})

// keyboard type // quando eu digitar no teclado 

window.addEventListener("keydown", playNote)