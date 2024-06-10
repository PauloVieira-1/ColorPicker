possible_chars = [0,1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");

const color_1 = document.querySelector(".color_1");
const color_2 = document.querySelector(".color_2");
const color_3 = document.querySelector(".color_3");
const color_4 = document.querySelector(".color_4");


btn.addEventListener("click", function() {

    let hexValue_1 = "#"
    let hexValue_2 = "#"
    let hexValue_3 = "#"
    let hexValue_4 = "#"

    for (let i = 0; i < 6; i++) {
        
        hexValue_1 += possible_chars[getRandomNumber()]
        hexValue_2 += possible_chars[getRandomNumber()]
        hexValue_3 += possible_chars[getRandomNumber()]
        hexValue_4 += possible_chars[getRandomNumber()]
    }

    document.getElementById("c1").style.backgroundColor = hexValue_1;
    document.getElementById("c2").style.backgroundColor = hexValue_2;
    document.getElementById("c3").style.backgroundColor = hexValue_3;
    document.getElementById("c4").style.backgroundColor = hexValue_4;
    
    color_1.textContent = hexValue_1;
    color_2.textContent = hexValue_2;
    color_3.textContent = hexValue_3;
    color_4.textContent = hexValue_4;

});


const getRandomNumber = () => {
    return Math.floor(Math.random() * possible_chars.length)
};