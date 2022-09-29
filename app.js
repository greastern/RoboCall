//const btn = document.querySelector('.talk');
//const content = document.querySelector('.content');

/*****************************************************************
*   Speech Recognition app using Vanilla JS
******************************************************************/
const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');

recognition.addEventListener('result', (e) =>{
    const text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

    p.innerText = text;
    texts.appendChild(p);

if(e.results[0].isFinal){
    p = document.createElement('p');
}
    console.log(text);
})

recognition.addEventListener('end', () =>{
    recognition.start();
})


recognition.start();

/*****************************************************************
*   Voice Recognition app
******************************************************************/
/*
//greetings
const greetings = [
    'Im good buddy',
    'doing good buddy',
    'i am fine' 
];

const weather = [
    'weather is fine',
    'you need a tan'
];





recognition.onstart = function() {
    console.log('voice is activated, you can speak to microphone');
};

recognition.onresult = function(event) {
    const current = event.resultIndex;

    const transcript = event.results[current][0].transcript;
    content.textContent = transcript;
    readOutLoud(transcript);
};

//recognition.onspeechend = function(){

//}

// add listener to button
btn.addEventListener('click', () => {
    recognition.start();
})

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance();
    
    speech.text = 'I do not know what you said';

    if(message.includes('how are you')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)];
        speech.text = finalText;
    }
    
    
    speech.volume = 1;
    speech.rate = .8;
    speech.pitch =.8;

    window.speechSynthesis.speak(speech);

}
*/
