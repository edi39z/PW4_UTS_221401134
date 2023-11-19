


const button = document.querySelector("#clickme");
const h1 = document.querySelector("h1");

button.addEventListener("click", () => {
    const newColor = generateRandomColor();
    document.body.style.backgroundColor = newColor;

    console.log(newColor);
});

const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
};

button.onclick = function () {
    console.log("Kamu berhasil klik aku");
};

button.onmouseover = function () {
    console.log("kamu");
};

