// ===============================
// IMAGE SLIDER
// ===============================
let slideIndex = 1;
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlideB");

    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
// ===============================
// VIDEO SLIDER
// ===============================
let slideIndexVid = 1;
function plusSlidesVd(n) {
    showSlidesVid(slideIndexVid += n);
}
function showSlidesVid(n) {
    let i;
    let slides = document.getElementsByClassName("mySlideVid");

    if (n > slides.length) {
        slideIndexVid = 1;
    }
    if (n < 1) {
        slideIndexVid = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndexVid - 1].style.display = "block";
} 

showSlides(slideIndex);
showSlidesVid(slideIndexVid);
