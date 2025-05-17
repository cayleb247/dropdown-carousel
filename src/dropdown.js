function addDropDownListeners() {
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
}

export {addDropDownListeners}