/*-----
Spanizer
- Wraps letters with spans, for css animations
-----*/
const spanizeLetters = {
  letters: document.querySelectorAll(".js-spanize"),
  init: function () {
    this.bindEvents();
  },
  bindEvents: function () {
    this.letters.forEach(function (letter) {
      const text = letter.textContent.trim().split("");
      letter.innerHTML = text.map((char) => `<span>${char}</span>`).join("");
    });
  },
};

spanizeLetters.init();
