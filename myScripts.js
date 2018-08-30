function nextPage() {
    window.location.assign("basic_settings.html");
}

function showFormData(element_id) {
    var x, text, i;
    x = document.forms[element_id]; // document.forms returns all <form> elements 
    text = "";
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


///////////////// SLIDESHOW //////////////////
var slideIndex = 1;
/* To avoid that document.getElementsByClassName(...) returns an empty array due to the DOM not being loaded yet */
document.addEventListener("DOMContentLoaded", function (event) {
    showSlides(slideIndex);
});

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i, slides, dots, captionText, filter;
    // WORK HERE THE FILTER
    
    
    slides = document.getElementsByClassName("mySlides");           
    dots = document.getElementsByClassName("demo");
    captionText = document.getElementById("caption");
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


//////////// SLIDESHOW FILTER ///////////////
document.addEventListener("DOMContentLoaded", function (event) {
    filterSelection("all"); // Execute the function and show all columns
});

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("column");
    if (c == "all"){
        c = "";
    }
    else {
        var numbers = document.getElementsByClassName("numbertext");
        for(i = 0; i < 6; i++){
            numbers[i].innerHTLM = "i / 6";
            // change numbertext to i / 6
        }
    }

    // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "show");
        if (x[i].className.indexOf(c) > -1){
            w3AddClass(x[i], "show");
        }
    }
}

// Show filtered elements
function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) {
            element.className += " " + arr2[i];
        }
    }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}


// Add active class to the current button (highlight it)
document.addEventListener("DOMContentLoaded", function (event) {
    var btnContainer = document.getElementById("myBtnContainer");
    var btns = btnContainer.getElementsByClassName("btn");
    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function () {
            var current = btnContainer.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
});
