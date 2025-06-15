document.addEventListener("DOMContentLoaded"), () => {
    startBtn.addEventListener("click", () => {
        alert("Buttonclicked!");
    const introScreen = document.getElementById("introScreen");
    const mainContent = document.getElementById("mainContent");
    const startBtn = document.getElementById("startBtn");
    const musicBtn = document.getElementById("musicBtn");
    const bgMusic = document.getElementById("bgMusic");
  
    startBtn.addEventListener("click", () => {
      introScreen.classList.add("hidden");
      mainContent.classList.remove("hidden");
      bgMusic.play();
      musicBtn.innerText = "Pause Music";
    });
  
    musicBtn.addEventListener("click", () => {
      if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.innerText = "Pause Music";
      } else {
        bgMusic.pause();
        musicBtn.innerText = "Play Music";
      }
    });
  
    // Gift Section
    window.openGift = function (element) {
      element.style.display = "none";
      document.getElementById("bouquetPopup").style.display = "flex";
    };
  
    window.sniff = function () {
      document.getElementById("hiddenMessage").style.display = "block";
    };
  
    // Photo Slider
    let currentSlide = 0;
    const slides = document.querySelectorAll(".slide");
  
    function updateSlide() {
      const offset = -currentSlide * 100;
      slides.forEach((slide) => {
        slide.style.transform = translateX(${offset}%);
      });
    }
  
    window.prevSlide = function () {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      updateSlide();
    };
  
    window.nextSlide = function () {
      currentSlide = (currentSlide + 1) % slides.length;
      updateSlide();
    };
  
    updateSlide();
  
    // Mini Game - Catch the Hearts
    const gameArea = document.getElementById("gameArea");
    const scoreSpan = document.getElementById("score");
    let score = 0;
  
    function createHeart() {
      const heart = document.createElement("div");
      heart.classList.add("heart");
      heart.style.left = Math.random() * (gameArea.clientWidth - 40) + "px";
      heart.style.top = "-40px";
  
      gameArea.appendChild(heart);
  
      let fallSpeed = 2 + Math.random() * 3;
      let position = -40;
  
      function fall() {
        if (position > gameArea.clientHeight) {
          heart.remove();
          clearInterval(fallInterval);
        } else {
          position += fallSpeed;
          heart.style.top = position + "px";
        }
      }
  
      const fallInterval = setInterval(fall, 20);
  
      heart.addEventListener("click", () => {
        score++;
        scoreSpan.innerText = score;
        heart.remove();
        clearInterval(fallInterval);
      });
    }
  
    setInterval(createHeart, 1500);
  
    // Confetti Animation
    const confettiContainer = document.getElementById("confetti");
  
    function createConfettiPiece() {
      const colors = ["#FF6F91", "#FFC75F", "#F9F871", "#D65DB1", "#845EC2"];
      const confetti = document.createElement("div");
      confetti.style.position = "absolute";
      confetti.style.width = "10px";
      confetti.style.height = "10px";
      confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
      confetti.style.top = "0";
      confetti.style.left = Math.random() * window.innerWidth + "px";
      confetti.style.opacity = "0.8";
      confetti.style.borderRadius = "50%";
      confetti.style.pointerEvents = "none";
      confettiContainer.appendChild(confetti);
  
      let y = 0;
      let x = parseFloat(confetti.style.left);
      let speedY = 2 + Math.random() * 3;
      let speedX = (Math.random() - 0.5) * 2;
  
      function fall() {
        if (y > window.innerHeight) {
          confetti.remove();
          clearInterval(fallInterval);
        } else {
          y += speedY;
          x += speedX;
          confetti.style.top = y + "px";
          confetti.style.left = x + "px";
        }
      }
      const fallInterval = setInterval(fall, 20);
    }
  
    function startConfetti() {
      const interval = setInterval(createConfettiPiece, 200);
      setTimeout(() => clearInterval(interval), 10000);
    }
  
    startConfetti();
});

