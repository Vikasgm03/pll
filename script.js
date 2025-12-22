let load = 0;
let loader = document.getElementById("loader");
let app = document.getElementById("app");
let loadText = document.getElementById("loadText");

let interval = setInterval(() => {
  load++;
  loadText.innerText = load + "%";
  if (load === 100) {
    clearInterval(interval);
    loader.style.display = "none";
    app.classList.remove("hidden");
    startTyping();
  }
}, 30);

let cards = document.querySelectorAll(".card");
let current = 0;

function nextCard() {
  cards[current].classList.remove("active");
  current++;
  if (current < cards.length) {
    cards[current].classList.add("active");
  }
}

function startTyping() {
  const text = "Hey you 🙂\nYes… you.\nToday’s a little special.";
  let i = 0;
  let el = document.querySelector(".type");
  let typing = setInterval(() => {
    el.innerHTML += text[i] === "\n" ? "<br>" : text[i];
    i++;
    if (i === text.length) clearInterval(typing);
  }, 60);
}

function showSecret() {
  document.getElementById("secret").classList.remove("hidden");
}

function confetti() {
  alert("🎉 Imagine confetti everywhere 🎉\nHappy Birthday!!");
}
