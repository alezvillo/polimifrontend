/* Import Futuristic Fonts */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Electrolize&family=Rajdhani:wght@400;700&display=swap');

/* Basic reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  cursor: none; /* Hide default cursor */
}

body {
  font-family: 'Electrolize', sans-serif;
  background-color: #0a0a0a;
  color: white;
  text-align: center;
  overflow: hidden;
}

/* 🔥 Animated Background (Neon Waves + Moving Nebula + Particles) */
.animated-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0, 255, 255, 0.1) 10%, rgba(0, 0, 0, 1) 90%);
  z-index: -2;
  animation: neonWaves 10s infinite alternate;
}

@keyframes neonWaves {
  0% { background-position: 0% 0%; opacity: 0.9; }
  100% { background-position: 100% 100%; opacity: 1; }
}

/* 🌌 Moving Nebula Effect */
.nebula {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url('https://www.transparenttextures.com/patterns/foggy-birds.png'); /* Soft fog effect */
  opacity: 0.15;
  animation: moveNebula 20s infinite alternate linear;
  z-index: -1;
}

@keyframes moveNebula {
  0% { transform: translateX(0px) translateY(0px); }
  100% { transform: translateX(50px) translateY(50px); }
}

/* ✨ Floating Particles */
.particles {
  position: fixed;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: -1;
}

/* 🚀 Cyberpunk Title */
.project-title {
  font-size: 3.5rem;
  font-weight: bold;
  font-family: 'Orbitron', sans-serif;
  color: #00ffff;
  text-shadow: 0px 0px 20px rgba(0, 255, 255, 1);
  text-transform: uppercase;
}

/* 🚀 Buttons (Glowing with Pulsing Effect) */
button {
  display: block;
  margin: 15px auto;
  padding: 12px 24px;
  font-size: 1.2rem;
  font-weight: bold;
  border-radius: 8px;
  border: none;
  transition: all 0.3s ease;
  text-transform: uppercase;
  font-family: 'Rajdhani', sans-serif;
  color: white;
  box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5);
  animation: pulseGlow 1.5s infinite alternate;
}

@keyframes pulseGlow {
  0% { box-shadow: 0px 0px 15px rgba(255, 255, 255, 0.5); }
  100% { box-shadow: 0px 0px 25px rgba(255, 255, 255, 1); }
}

#connectButton {
  background: linear-gradient(45deg, #ff0000, #ff7300);
}

#mintButton {
  background: linear-gradient(45deg, #00ff99, #0099ff);
}

#claimButton {
  background: linear-gradient(45deg, #ffdd00, #ff8800);
}

button:hover {
  transform: scale(1.1);
  filter: brightness(1.3);
}

/* 🚀 NFT Scrolling Carousel */
.carousel {
  width: 90%;
  max-width: 1200px;
  overflow: hidden;
  white-space: nowrap;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  position: relative;
}

.carousel img {
  width: 200px;
  height: 200px;
  margin: 10px;
  border-radius: 25px;
  transition: transform 0.3s ease-in-out;
  box-shadow: 0px 0px 15px #00ffcc;
}

.carousel img:hover {
  transform: scale(1.1);
}

/* 🚀 Token Display */
.token-container {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  margin-top: 30px;
}

.token-display {
  width: 500px;
  height: 250px;
  background: linear-gradient(145deg, #1e1e1e, #292929);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  transition: transform 0.5s ease-in-out;
  box-shadow: 0px 0px 15px rgba(0, 255, 255, 0.5);
}

.token-display:hover {
  transform: scale(1.05);
}

/* 🚀 Arrows */
.arrow {
  font-size: 2rem;
  background: none;
  color: white;
  border: none;
  cursor: none;
  transition: transform 0.2s ease;
  margin: 0px 5px;
}

.arrow:hover {
  transform: scale(1.3);
}

/* 🔥 Custom Cursor */
.cursor {
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: rgba(0, 255, 255, 0.7);
  box-shadow: 0px 0px 10px rgba(0, 255, 255, 0.9);
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: transform 0.1s ease-out;
}

/* 🔥 Cursor Distortion Effect */
.cursor-trail {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 255, 255, 0.2);
  position: absolute;
  transform: translate(-50%, -50%);
  pointer-events: none;
  transition: transform 0.3s ease-out;
}
