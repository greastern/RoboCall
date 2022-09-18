const btn = document.querySelector('.talk');
const content = document.querySelector('.content');

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


const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition = new SpeechRecognition();

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
    speech.rate = 1;
    speech.pitch = 1;

    window.speechSynthesis.speak(speech);

}

