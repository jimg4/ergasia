const header = document.querySelector("#header nav");
const hero = document.getElementById("hero");
const welcome = document.getElementById("welcome");
const services = document.getElementById("services");
const skills = document.getElementById("skills");
const portfolio = document.getElementById("portfolio");
const contact = document.getElementById("contact");
const blog = document.getElementById("recent");
const logo = document.querySelector(".navbar-brand");
const navLinks = document.querySelectorAll(".nav-link");
const mySections = [hero, welcome, services, portfolio, blog, contact];

const removeScrolled = (item) => item.classList.remove("scrolled");
const addScrolled = (item) => item.classList.add("scrolled");

window.onscroll = () => {
    //change navbar bg and colors on scroll
    if (
        document.body.scrollTop >= 100 ||
        document.documentElement.scrollTop >= 100
    ) {
        addScrolled(header);
        addScrolled(logo);
        navLinks.forEach((e) => addScrolled(e));
    } else {
        removeScrolled(header);
        removeScrolled(logo);
        navLinks.forEach((e) => removeScrolled(e));
    }
    // highlight menu item while on section
    let current = "";
    mySections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });
    navLinks.forEach((e) => {
        e.classList.remove("active-link");
        if (e.classList.contains(current + "-link")) {
            e.classList.add("active-link");
        }
    });
};
