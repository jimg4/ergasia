const header = document.querySelector("#header nav");
const hero = document.getElementById("hero");
const welcome = document.getElementById("welcome");
const services = document.getElementById("services");
const skills = document.getElementById("skills");
const logo = document.querySelector(".navbar-brand");
const navLinks = document.querySelectorAll(".nav-link");

//change navbar bg and colors on scroll
window.onscroll = () => {
    if (
        document.body.scrollTop >= 100 ||
        document.documentElement.scrollTop >= 100
    ) {
        header.classList.add("scrolled");
        logo.classList.add("scrolled");

        navLinks.forEach((e) => {
            e.classList.add("scrolled");
        });
    } else {
        header.classList.remove("scrolled");
        logo.classList.remove("scrolled");
        navLinks.forEach((e) => {
            e.classList.remove("scrolled");
        });
    }
};
