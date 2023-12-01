let header = document.querySelector(".header");
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector("nav");
const footer = document.querySelector('.footer');


// add sticky class to header
window.addEventListener("scroll", function () {
    header.classList.toggle("sticky", window.scrollY > 100);
});

// handle the active link (when scrolling)
window.addEventListener("scroll", function () {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove("active");
                document.querySelector("header nav a[href*=" + id + "]").classList.add("active");
            })
        }
    })
});


// open or close navbar links on small screens when clicking on menuIcon
menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
});

// remove toggle icon and navbar when clicking on any link (when scrolling)
window.addEventListener("scroll", () => {
    menuIcon.classList.remove("bx-x");
    navbar.classList.remove("active");
});

// active sections for animation on scroll 
window.addEventListener("scroll", () => {
    sections.forEach(section => {
        let top = window.scrollY;
        let offset = section.offsetTop - 100;
        let height = section.offsetHeight;
        let id = section.getAttribute("id");


        if (top >= offset && top < offset + height) {
            section.classList.add("show-animate");
        } //else { // if you want animation to repeats on scroll use this

        //     section.classList.remove("show-animate");

        // }
    })
});

// animation footer on scroll // this isn't working and I don't know why
window.addEventListener("scroll", () => {
    footer.classList.toggle("show-animate", window.innerHeight + window.scrollY + 10 >= document.scrollingElement.scrollHeight);
    console.log(footer, window.innerHeight + window.scrollY + 10, document.scrollingElement.scrollHeight);

});

