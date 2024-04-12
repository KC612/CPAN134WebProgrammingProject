const slides = document.querySelectorAll(".slides p");
let slideIndex = 0;


//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider );

function initializeSlider(){
    slides[slideIndex].classList.add("displaySlide");

}

function showSlide(index){
    if(index >= slides.length){
        slideIndex = 0;
        

    }
    else if(index < 0){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");

    });
    slides[slideIndex].classList.add("displaySlide");


}

function prevslide(){
    slideIndex--;
    showSlide(slideIndex);

}


function nextslide(){
    slideIndex++;
    showSlide(slideIndex);



}