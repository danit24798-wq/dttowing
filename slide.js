function plusSlides(n) {
  showSlides(slideIndex += n);
}
function plusSlidesSpa(n) {
  showSlidesSpa(slideIndex += n);
}
function plusSlidesPh(n) {
  showSlidesPh(slideIndex += n);
}
function plusSlidesVd(n) {
  showSlidesVid(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlideB");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  } 
  slides[slideIndex-1].style.display = "block";  
}

function showSlidesSpa(n) {
  let i;
  let slides = document.getElementsByClassName("mySlideBSpa");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  } 
  slides[slideIndex-1].style.display = "block";  
}

function showSlidesPh(n) {
  let i;
  let slides = document.getElementsByClassName("mySlideBPh");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  } 
  slides[slideIndex-1].style.display = "block";  
}
function showSlidesVid(n) {
  let i;
  let slides = document.getElementsByClassName("mySlideVid");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  } 
  slides[slideIndex-1].style.display = "block";  
}
let slideIndex = 1;
showSlides(slideIndex); 
showSlidesSpa(slideIndex); 
showSlidesPh(slideIndex); 
showSlidesVid(slideIndex);