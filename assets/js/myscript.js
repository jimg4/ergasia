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
        document.body.scrollTop >= 50 ||
        document.documentElement.scrollTop > 50
    ) {
        header.style.background = "white";
        header.style.boxShadow = "0px 5px 50px -12px rgba(0, 0, 0, 0.25)";
        logo.style.color = "black";

        navLinks.forEach((e) => {
            e.style.color = "black";
            e.style.borderLeft = "1px solid rgba(15,10,10,0.1)";
        });

        navLinks[navLinks.length - 1].style.borderRight =
            "1px solid rgba(15,10,10,0.1)";
    } else {
        header.style.background = "";
        header.style.boxShadow = "";
        logo.style.color = "";
        navLinks.forEach((e) => {
            e.style.color = "";
            e.style.borderLeft = "";
        });
        navLinks[navLinks.length - 1].style.borderRight = "";
    }
};
