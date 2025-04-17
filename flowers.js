
function createFlower() {
    const flower = document.createElement('div');
    flower.classList.add('falling-flower');
    flower.innerText = ['🌸', '💮', '🌺', '🌼'][Math.floor(Math.random() * 4)];
  
    // Random start position: left, middle, or right thirds
    const screenWidth = window.innerWidth;
    const randomSide = Math.random();
  
    let startX;
    if (randomSide < 0.33) {
      startX = Math.random() * (screenWidth * 0.3); // Left
    } else if (randomSide < 0.66) {
      startX = screenWidth * 0.35 + Math.random() * (screenWidth * 0.3); // Middle
    } else {
      startX = screenWidth * 0.7 + Math.random() * (screenWidth * 0.3); // Right
    }
  
    flower.style.left = `${startX}px`;
  
    // Optional: curve toward center
    const fallRotation = -15 + Math.random() * 30; // -15 to 15 degrees
    flower.style.transform = `rotate(${fallRotation}deg)`;
  
    document.body.appendChild(flower);
  
    setTimeout(() => {
      flower.remove();
    }, 8000);
  }
  
  // Create new flowers at a faster rate
  setInterval(createFlower, 250);
  