const thumbBar = document.querySelector('.thumb-bar');
const displayedImg = document.querySelector('.displayed-img');
const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

// Array com os nomes dos arquivos das imagens
const imageFiles = ['pic1.jpg', 'pic2.jpg', 'pic3.jpg', 'pic4.jpg', 'pic5.jpg'];

// Loop para criar as miniaturas e adicionar manipuladores de eventos
for (let i = 0; i < imageFiles.length; i++) {
  const newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/' + imageFiles[i]); // As imagens estão na pasta "images"
  
  // Adicionando manipulador de evento para cada miniatura
  newImage.addEventListener('click', function(event) {
    const src = event.target.getAttribute('src'); // Obtendo o src da imagem clicada
    displayedImg.setAttribute('src', src); // Definindo o src da imagem grande como o da miniatura clicada
  });

  thumbBar.appendChild(newImage);
}

// Adicionando manipulador de evento ao botão para escurecer/clarear a imagem grande
btn.addEventListener('click', function() {
  if (btn.getAttribute('class') === 'dark') {
    btn.setAttribute('class', 'light');
    btn.textContent = 'Clarear';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  } else {
    btn.setAttribute('class', 'dark');
    btn.textContent = 'Escurecer';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  }
});
