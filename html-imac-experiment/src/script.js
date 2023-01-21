let bodyFontSize = document.getElementById("size");
let wrapper = document.getElementById("wrap");

bodyFontSize.addEventListener('keyup', function() {
  wrapper.style.fontSize = bodyFontSize.value;
}, false);