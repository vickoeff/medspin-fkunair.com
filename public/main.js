document.addEventListener("DOMContentLoaded", () => {
  const preloader = document.getElementById("preloader");

  preloader.style.opacity = 0;
});

// Bright Style
const elBright = document.getElementsByClassName("bright");
const elBrightLength = elBright.length;

for (let i = 0; i < elBrightLength; i++) {
  const el = elBright[i];
  const text = el.innerHTML;
  const tagName = el.tagName;
  el.innerHTML = "";

  for (let k = 0; k < 4; k++) {
    const light = document.createElement(tagName);
    const innerText = document.createTextNode(text);
    light.appendChild(innerText);

    el.appendChild(light);
  }
}
