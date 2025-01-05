let index = 1;
showSlides(index);

function addSlide(n) {
    showSlides(index += n)
}



function currentSlide(n){
    showSlides(index = n)
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length){
        index = 1;
    }

    if (n < 1){
        index = slides.length;
    }

    for (let i=0; i<slides.length; i++){
        slides[i].style.display = "none";
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[index-1].style.display = "flex";
    dots[index-1].className += " active";
}