import "./styles.css";

const dropdownContainer = document.querySelector(".dropdown-container");
const dropdownButton = document.querySelector(".dropdown-button");
const dropdownContent = document.querySelector(".dropdown-content");

dropdownContainer.addEventListener('mouseenter', () => {
    dropdownContent.style.visibility = "visible";
    dropdownButton.classList.add('dropdown-button-hover');
})

dropdownContainer.addEventListener('mouseleave', () => {
    dropdownContent.style.visibility = "hidden";
    dropdownButton.classList.remove('dropdown-button-hover');
})