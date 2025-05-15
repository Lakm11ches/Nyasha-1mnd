window.onload = function () {
  const screamer = document.getElementById("screamer");
  const screamSound = document.getElementById("scream-sound");
  const preload = document.getElementById("preloader");
  const main = document.getElementById("main-content");

  // 1. Ждём 4 секунды — прелоадер
  setTimeout(() => {
    screamSound.volume = 0.5;
    screamSound.play();
    preload.style.display = "none";
    screamer.style.display = "block";

    // 2. Через 2 секунды скрываем скример
    setTimeout(() => {
      screamer.style.display = "none";

      // 3. Ждём ещё 2 секунды (пустота), и потом показываем main
      setTimeout(() => {
        main.style.display = "block";
        document.body.style.backgroundColor = "#ffe6f0";
        waitForNextGlitch();
      }, 3000);
    }, 2000);
  }, 4000);
};

document.getElementById("promo-button").addEventListener("click", function() {
  // Показываем фейковый промокод
  document.getElementById("fake-code").style.display = "block";
});

// Получаем элемент с музыкой
const music = document.getElementById('background-music');

// Устанавливаем начальную громкость на 0
music.volume = 0;

// Функция для плавного увеличения громкости
function fadeInAudio() {
  let volume = 0; // Начальная громкость
  const targetVolume = 0.35; // Конечная громкость
  const duration = 5000; // Длительность анимации в миллисекундах (например, 5 секунд)
  const step = targetVolume / (duration / 16); // Шаг увеличения громкости

  // Функция для анимации изменения громкости
  function increaseVolume() {
    if (volume < targetVolume) {
      volume += step; // Увеличиваем громкость
      music.volume = Math.min(volume, targetVolume); // Ограничиваем максимальную громкость
      requestAnimationFrame(increaseVolume); // Плавно продолжаем анимацию
    }
  }

  music.play(); // Начать воспроизведение
  increaseVolume(); // Запуск анимации
}

// Задержка в 2 секунды перед началом воспроизведения
setTimeout(() => {
  fadeInAudio(); // Начать плавное увеличение громкости
}, 6500);

const emojis = document.querySelectorAll('.float-emoji');
emojis.forEach(emoji => {
  emoji.style.left = Math.random() * 100 + 'vw';
  emoji.style.animationDuration = (8 + Math.random() * 5) + 's';
  emoji.style.animationDelay = Math.random() * 5 + 's';
  emoji.style.fontSize = (16 + Math.random() * 24) + 'px';
});

const greeting = document.getElementById("greeting");
const texts = ["Ты прелесть:o", "Ты чудо:)", "Ты котёнок:3", "Ты моё счастье:O", "Я люблю тебя<3"];
let index = 0;

setInterval(() => {
  greeting.classList.add("glitch"); // добавляем глитч
  setTimeout(() => {
    greeting.textContent = texts[index];
    index = (index + 1) % texts.length;
    greeting.classList.remove("glitch"); // убираем глитч
  }, 200); // смена текста немного после старта глитча
}, 1500); // каждые 1.5 секунды


function showKittyMessage(kittyImg) {
  const message = kittyImg.nextElementSibling;
  message.classList.add("show");

  // По желанию, скрыть через 3 секунды:
  setTimeout(() => {
    message.classList.remove("show");
  }, 3000);
}


function startCute() {
  document.getElementById("question").style.display = "none";
  const messages = [
    "ладно извинити:D",
    "ващета сьодня",
    "особенный день:o",
    "помниш какой?:3"
  ];

  const container = document.getElementById("cute-messages");
  container.innerHTML = "";
  container.style.display = "block";

  let index = 0;

  function showNextMessage() {
    if (index < messages.length) {
      container.innerHTML = ""; // Удалить предыдущий текст
      const p = document.createElement("p");
      p.className = "cute-text";
      p.textContent = messages[index];
      container.appendChild(p);
      index++;

      setTimeout(showNextMessage, 1800); // Подождать перед следующим
    } else {
      // Показываем кнопки после последнего сообщения
      const buttons = document.getElementById("answer-buttons");
      buttons.style.display = "block";
    }
  }

  showNextMessage();
}

const answerButtons = document.querySelectorAll(".answer-btn");
const cuteMessagesContainer = document.getElementById("cute-messages");

const finalTexts = {
  "новый год": "неа, но тоже волшебно 🎄",
  "твой день рождения": "почти, но не сегодня 🎂",
  "первый день осени": "это романтично... но не оно 🍁",
  "мы встречаемса месяц": "ДАААА!!! МЕСЯЦ ❤️"
};

answerButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Скрыть все кнопки
    document.getElementById("answer-buttons").style.display = "none";

    // Показать сообщение
    const text = finalTexts[button.textContent.trim()];
    const p = document.createElement("p");
    p.className = "final-cute-text";
    p.textContent = text;

    cuteMessagesContainer.appendChild(p);

    // Через 1 секунду — финальный экран
    setTimeout(showFinalScreen, 1000);
  });
});

// Функция для отображения финального экрана
function showFinalScreen() {
  const finalScreen = document.getElementById("final-screen");

  // Показать экран с поздравлением
  finalScreen.style.display = "flex";
  document.getElementById("kitty-container").style.display = "flex";

  // Кнопка перезагрузки игры
  const restartButton = document.querySelector("#final-screen button");
  restartButton.addEventListener("click", restartGame);
}

document.addEventListener('click', function(e) {
const emojis = ['💖','🌈','😺','✨','🦄','👽','🍓','⭐','🎀'];
const emoji = document.createElement('span');
emoji.classList.add('tap-effect');
emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
emoji.style.left = e.clientX + 'px';
emoji.style.top = e.clientY + 'px';
document.body.appendChild(emoji);

setTimeout(() => {
  emoji.remove();
}, 1000); // удаляем через 1 секунду
});

function showKittyMessage(el) {
  const msg = el.nextElementSibling;
  msg.style.display = 'block';
  msg.classList.add('show');

  const meow = new Audio('data:audio/mp3;base64,SUQzBAAAAAAAI1RPU0QAAABtbnNA...'); // вставь сюда свою Base64 строку

  meow.play();
}

const glitchImage = document.getElementById("glitchEffectImg");

function getRandomPosition() {
  const margin = 0.1; // 10% от краёв
  const maxWidth = window.innerWidth;
  const maxHeight = window.innerHeight;

  const left = Math.random() * (1 - 2 * margin) * maxWidth + margin * maxWidth;
  const top = Math.random() * (1 - 2 * margin) * maxHeight + margin * maxHeight;

  glitchImage.style.left = `${left}px`;
  glitchImage.style.top = `${top}px`;
}

function triggerGlitchEffect() {
  const flashes = Math.floor(Math.random() * 3) + 2; // 2–4 вспышки
  let count = 0;

  function flashOnce() {
    if (count >= flashes) {
      waitForNextGlitch();
      return;
    }

    getRandomPosition();
    glitchImage.style.display = "block";

    setTimeout(() => {
      glitchImage.style.display = "none";
      count++;
      setTimeout(flashOnce, Math.random() * 100 + 50);
    }, Math.random() * 100 + 50);
  }

  flashOnce();
}

function getRandomPosition() {
  const margin = 0.1; // 10% от краёв
  const maxWidth = window.innerWidth;
  const maxHeight = window.innerHeight;

  // Генерируем случайный размер
  const size = Math.floor(Math.random() * 251) + 100; // от 100 до 350

  // Ограничим позицию так, чтобы изображение не выходило за экран
  const left = Math.random() * (maxWidth - size - margin * maxWidth * 2) + margin * maxWidth;
  const top = Math.random() * (maxHeight - size - margin * maxHeight * 2) + margin * maxHeight;

  glitchImage.style.left = `${left}px`;
  glitchImage.style.top = `${top}px`;
  glitchImage.style.width = `${size}px`;
  glitchImage.style.height = `${size}px`; // если важно, чтобы не искажалось — или можно auto
}

function waitForNextGlitch() {
  const delay = Math.random() * 4000 + 2000; // 3–8 сек
  setTimeout(triggerGlitchEffect, delay);
}