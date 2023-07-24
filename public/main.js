document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");

    preloader.style.opacity = 0;
});

// Bright Style
document.body.onload = brightEl;

function brightEl() {
    const elBright = document.getElementsByClassName("bright");
    const elBrightLength = elBright.length;
    
    for(let i = 0; i < elBrightLength; i++) {
        const el = elBright[i];
        const text = el.innerHTML;
        el.innerHTML = "";
        
        for(let k = 0; k < 4; k++) {
            const light = document.createElement("h1");
            const innerText = document.createTextNode(text);
            light.appendChild(innerText);

            el.appendChild(light);
        }
    }
}