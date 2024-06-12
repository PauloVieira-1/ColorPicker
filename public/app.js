possible_chars = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {

    let hexValue = "#"
    for (let i = 0; i < 6; i++) {
        hexValue += possible_chars[getRandomNumber()]

    }

    document.body.style.backgroundColor = hexValue;
    color.textContent = hexValue;

});


const getRandomNumber = () => {
    return Math.floor(Math.random() * possible_chars.length)
};