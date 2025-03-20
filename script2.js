// 🔥 Custom Cursor Effect
const cursor = document.createElement('div');
cursor.classList.add('cursor');
document.body.appendChild(cursor);

const trail = document.createElement('div');
trail.classList.add('cursor-trail');
document.body.appendChild(trail);

document.addEventListener('mousemove', (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
  trail.style.left = `${e.clientX}px`;
  trail.style.top = `${e.clientY}px`;
});

// 🔥 Floating Particles Effect
const particlesContainer = document.createElement('div');
particlesContainer.classList.add('particles');
document.body.appendChild(particlesContainer);

for (let i = 0; i < 30; i++) {
  let particle = document.createElement('div');
  particle.style.width = "5px";
  particle.style.height = "5px";
  particle.style.background = "rgba(0, 255, 255, 0.5)";
  particle.style.position = "absolute";
  particle.style.top = `${Math.random() * 100}vh`;
  particle.style.left = `${Math.random() * 100}vw`;
  particle.style.borderRadius = "50%";
  particle.style.animation = `moveParticle ${3 + Math.random() * 5}s infinite linear`;
  particlesContainer.appendChild(particle);
}

// 🔥 NFT Scrolling Carousel
const nftImages = Array.from({ length: 30 }, (_, i) => `https://via.placeholder.com/200?text=NFT+${i + 1}`);
const carousel = document.getElementById("nftCarousel");

function loadNFTImages() {
  carousel.innerHTML = "";
  const totalImages = nftImages.length * 2;
  for (let i = 0; i < totalImages; i++) {
    let img = document.createElement("img");
    img.src = nftImages[i % nftImages.length];
    carousel.appendChild(img);
  }
}
loadNFTImages();

// Infinite scrolling
setInterval(() => {
  carousel.scrollLeft += 1;
  if (carousel.scrollLeft >= carousel.scrollWidth / 2) {
    carousel.scrollLeft = 0;
  }
}, 30);

// 🔥 Token Scrolling Display (Now Auto-Scrolling!)
const tokenData = [
  { name: "MoonToken", symbol: "MOON", description: "A token for intergalactic traders.", image: "https://via.placeholder.com/100" },
  { name: "DogeBoost", symbol: "DOGE", description: "Powered by memes and rockets.", image: "https://via.placeholder.com/100" },
  { name: "GigaToken", symbol: "GIGA", description: "Biggest brain in the crypto world.", image: "https://via.placeholder.com/100" }
];

let currentIndex = 0;
const tokenName = document.getElementById("tokenName");
const tokenDescription = document.getElementById("tokenDescription");
const tokenImage = document.getElementById("tokenImage");
const prevToken = document.getElementById("prevToken");
const nextToken = document.getElementById("nextToken");

function updateTokenDisplay(index) {
  const token = tokenData[index];
  tokenName.innerHTML = `${token.name} (${token.symbol})`;
  tokenDescription.innerHTML = token.description;
  tokenImage.src = token.image;
}
updateTokenDisplay(currentIndex);

// Manual scrolling
prevToken.onclick = () => { 
  currentIndex = (currentIndex - 1 + tokenData.length) % tokenData.length; 
  updateTokenDisplay(currentIndex); 
};

nextToken.onclick = () => { 
  currentIndex = (currentIndex + 1) % tokenData.length; 
  updateTokenDisplay(currentIndex); 
};

// **Auto-Scrolling Tokens**
setInterval(() => {
  currentIndex = (currentIndex + 1) % tokenData.length;
  updateTokenDisplay(currentIndex);
}, 5000); // Scrolls every 5 seconds

