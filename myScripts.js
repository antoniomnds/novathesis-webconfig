function showFormData(element_id) {
    var x = document.forms[element_id]; // document.forms returns all <form> elements 
    var text = "";
    var i;
    for (i = 0; i < x.length; i++) {
        text += x.elements[i].value + "<br/>"; // append to text
    }
    document.getElementById("form_content").innerHTML = text;
}

// var x = document.getElementsByTagName("form");  // object collection with all document forms

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
    var x = document.getElementById("myNav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}



var slideIndex = 1;
/* To avoid that document.getElementsByClassName(...) returns an empty array due to the DOM not being loaded yet */
document.addEventListener("DOMContentLoaded", function(event) { 
    showSlides(slideIndex);
});

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}

