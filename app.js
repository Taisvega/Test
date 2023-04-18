const h1 = document.querySelector('h1');
const form = document.getElementById('meme-form');
const memeContainer = document.querySelector('#meme-container');

function randomRGB(){
    const r = Math.floor(Math.random() *256);
    const g = Math.floor(Math.random() *256);
    const b = Math.floor(Math.random() *256);
    return `rgb(${r},${g},${b})`
  }

setInterval(() => {
  h1.style.color = randomRGB();
}, 500);

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const topTextInput = document.querySelector('#top-text-input');
  const bottomTextInput = document.querySelector('#bottom-text-input');
  const imgUrl = document.getElementById('image-input').value;

  if (!topTextInput.value || !bottomTextInput.value || !imgUrl) {
    alert('Please fill out all input fields!!!!');
    return;
  }
  const topText = document.createElement('div');
  topText.classList.add('top-text');
  topText.textContent = topTextInput.value;

  const memeDiv = document.createElement('div');
  memeDiv.classList.add('meme');

  const bottomText = document.createElement('div');
  bottomText.classList.add('bottom-text');
  bottomText.textContent = bottomTextInput.value;

  const image = document.createElement('img');
  image.src = imgUrl;

  const removeButton = document.createElement('button');
  removeButton.classList.add('remove-button');
  removeButton.textContent = 'X';
  removeButton.addEventListener('click', () => memeDiv.remove());

  memeDiv.append(topText, bottomText, image, removeButton);
  memeContainer.appendChild(memeDiv);

  topTextInput.value = '';
  bottomTextInput.value = '';
  document.getElementById('image-input').value = '';
});
