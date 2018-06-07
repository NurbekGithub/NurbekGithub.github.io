window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const slider = document.querySelector('.items');
const recognition = new SpeechRecognition();

const clientWidth = slider.clientWidth;
let current = 0;

recognition.interimResults = true;
//does all the magic
recognition.addEventListener('result', e => {

  slider.classList.add('active');
  let transcript = e.results[0][0].transcript;

  if(e.results[0].isFinal) {
    console.log(transcript);
    doAction(transcript);
    slider.classList.remove('active');
  }
});

function doAction(transcript) {
  switch (true) {
    case transcript.toLowerCase().includes('айда'):
      current = 0;
      doScroll(current);
      break;
    case transcript.toLowerCase().includes('нурбек'):
      current = 1;
      doScroll(current);
      break;
    case transcript.toLowerCase().includes('зангар') ||
         transcript.toLowerCase().includes('зунга'):
      current = 2;
      doScroll(current);
      break;
    case transcript.toLowerCase().includes('ерке'):
      current = 3;
      doScroll(current);
      break;
    case transcript.toLowerCase().includes('абылай'):
      current = 4;
      doScroll(current);
      break;
    case transcript.toLowerCase().includes('мейржан') ||
         transcript.toLowerCase().includes('миржан') ||
         transcript.toLowerCase().includes('миша') ||
         transcript.toLowerCase().includes('мишка'):
      current = 5;
      doScroll(current);
      break;
    default:
      doShake(current);
  }
}

function doScroll(current) {
  slider.scroll({
    left: (current * clientWidth),
    behavior: 'smooth' 
  })
}

function doShake(current) {
  slider.classList.add('shake');
}

slider.addEventListener('animationend', function() {
  this.classList.remove('shake');
})

recognition.addEventListener('end', recognition.start)
recognition.start();