// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const modal = document.getElementById('modal');
modal.classList.add('hidden')

document.addEventListener('click', (event) => {
  if (event.target.classList.contains('like-glyph')) {
    mimicServerCall()
    .then(() => {
      if (event.target.innerText === EMPTY_HEART) {
        event.target.innerText = FULL_HEART;
        event.target.classList.add('activated-heart')
      } else {
        event.target.innerText = EMPTY_HEART;
        event.target.classList.remove('activated-heart')
      }
    })
    .catch((error) => {
      console.error('error', error)
    });
  }
})




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
