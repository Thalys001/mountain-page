const mountainLeftEl = document.querySelector("#mountain_left");
const mountainRightEl = document.querySelector("#mountain_right");
const cloud1El = document.querySelector("#clouds_1");
const cloud2El = document.querySelector("#clouds_2");
const textEl = document.querySelector("#text");
const manEl = document.querySelector("#man");

// Atualizar posição dos elementos HTML com base no valor de rolagem
function updateElementsPosition() {
  const scrollPosition = window.scrollY;

  // Atualizar posição da montanha esquerda
  mountainLeftEl.style.left = `-${scrollPosition / 0.7}px`;

  // Atualizar posição da nuvem direita
  cloud2El.style.left = `-${scrollPosition * 2}px`;

  // Atualizar posição da montanha direita
  mountainRightEl.style.left = `${scrollPosition / 0.7}px`;

  // Atualizar posição da nuvem esquerda
  cloud1El.style.left = `${scrollPosition * 2}px`;

  // Atualizar posição do texto
  textEl.style.bottom = `-${scrollPosition}px`;

  // Atualizar altura da imagem do homem
  manEl.style.height = `${window.innerHeight - scrollPosition}px`;
}

// Adicionar ouvinte de eventos para atualizar posição dos elementos
window.addEventListener("scroll", updateElementsPosition);
