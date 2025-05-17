import chessChatter from "./images/chess_chatter.png"
import drugSift from "./images/drug_sift.png"
import library from "./images/library.png"

function addCarouselElements() {
    const carouselContainer = document.querySelector(".carousel-container");
    const imageContainer = document.querySelector(".image-container")

    const chessChatterImg = document.createElement("img");
    chessChatterImg.src = chessChatter;

    const drugSiftImg = document.createElement("img");
    drugSiftImg.src = drugSift;

    const libraryImg = document.createElement("img");
    libraryImg.src = library;

    imageContainer.appendChild(chessChatterImg);
    imageContainer.appendChild(drugSiftImg);
    imageContainer.appendChild(libraryImg);
}

function addCarouselFunc() {

    let photoIndex = -1;

    function displayPhoto() {
        const images = document.querySelectorAll("img");
        for (const image of images) {
            if (image.classList.contains("img-hidden")) {
                image.classList.remove("img-hidden");
            }
        }
        for (const image of images) {
            if (images[photoIndex] != image) {
                image.classList.add("img-hidden");
            }
        }
    }

    function displayPhotoForward() {
        nextPhoto();
        displayPhoto();
        displayScroll();
    }

    function displayPhotoBackward() {
        lastPhoto();
        displayPhoto();
        displayScroll();
    }

    function nextPhoto() {
        if (photoIndex < 2) {
            photoIndex += 1;
        }
        else {
            photoIndex = 0;
        }
    }

    function lastPhoto() {
        if (photoIndex > 0) {
            photoIndex -= 1;
        }
        else {
            photoIndex = 2;
        }
    }

    function displayScroll() {
        for (const navdotSVG of navdotSVGS) {
            navdotSVG.classList.remove("navdot-selected")
        }
        navdotSVGS[photoIndex].classList.add("navdot-selected")
    }

    const scrollSVGs = document.querySelectorAll(".scroll-container svg");

    scrollSVGs[0].addEventListener("click", () => {
        displayPhotoBackward();
        clearInterval(carouselTimer);
        carouselTimer = setInterval(displayPhotoForward, 5000);
    })
    scrollSVGs[1].addEventListener("click", () => {
        displayPhotoForward();
        clearInterval(carouselTimer);
        carouselTimer = setInterval(displayPhotoForward, 5000);
    })

    // NavDot functionality
    const navdotSVGS = document.querySelectorAll(".navdot-container .navdot");
    for (let i=0; i<navdotSVGS.length; i++) {
        navdotSVGS[i].addEventListener("click", () => {
            photoIndex = i;
            displayPhoto();
            clearInterval(carouselTimer);
            carouselTimer = setInterval(displayPhotoForward, 5000);
        })
    }

    // Timer/Start
    displayPhotoForward();
    let carouselTimer = setInterval(displayPhotoForward, 5000);

}

function createCarousel() {
    addCarouselElements();
    addCarouselFunc();
}

export {createCarousel}