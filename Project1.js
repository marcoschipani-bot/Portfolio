// Toggle hamburger menu
function toggleMenu() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("active"); // Toggle the 'active' class to show/hide the menu
}

// Slide Show Variables and Initialization
let slideIndex = 0;
let slideTimeout;

showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Increment slide index
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    // Remove "active" class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Show the current slide and mark the corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";

    // Clear previous timeout to prevent overlapping
    clearTimeout(slideTimeout);

    // Set a new timeout for 7 seconds
    slideTimeout = setTimeout(showSlides, 7000);
}

// Manual controls for next/previous slides
function plusSlides(n) {
    clearTimeout(slideTimeout);

    slideIndex += n - 1;
    if (slideIndex < 1) {
        slideIndex = document.getElementsByClassName("mySlides").length;
    } else if (slideIndex > document.getElementsByClassName("mySlides").length) {
        slideIndex = 1;
    }
    showSlides();
}

// Manual controls for dots
function currentSlide(n) {
    clearTimeout(slideTimeout);

    slideIndex = n;
    showSlides();
}

// Event listener for the hamburger menu
document.addEventListener("DOMContentLoaded", function() {
    const hamburger = document.querySelector(".hamburger");
    hamburger.addEventListener("click", toggleMenu); // Use the updated toggleMenu function

    // Set target="_blank" for all links
    const links = document.querySelectorAll('a');
    links.forEach(link => {
        link.setAttribute('target', '_blank'); // Open all links in a new tab
        link.setAttribute('rel', 'noopener noreferrer'); // Add security attribute
    });
});
