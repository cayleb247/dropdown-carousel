import "./styles.css";
import chessChatter from "./images/chess_chatter.png"
import drugSift from "./images/drug_sift.png"
import library from "./images/library.png"

const dropdownContainers = document.querySelectorAll(".dropdown-container");
const dropdownButtons = document.querySelectorAll(".dropdown-button");
const dropdownContents = document.querySelectorAll(".dropdown-content");

for (let i=0; i<dropdownContainers.length;i++) {
    dropdownContainers[i].addEventListener('mouseenter', () => {
        dropdownContents[i].style.visibility = "visible";
        dropdownButtons[i].classList.add('dropdown-button-hover');
    })
    dropdownContainers[i].addEventListener('mouseleave', () => {
        dropdownContents[i].style.visibility = "hidden";
        dropdownButtons[i].classList.remove('dropdown-button-hover');
    })
}

