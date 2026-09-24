/* =========================================================
   KAWTHER PORTFOLIO JS
========================================================= */


/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");
const navLinks = document.querySelectorAll(".nav-link");

menuBtn.addEventListener("click", () => {

    navbar.classList.toggle("open");
    document.body.classList.toggle("menu-open");

    const icon = menuBtn.querySelector("i");

    if (navbar.classList.contains("open")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-xmark");
    } else {
        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");
    }

});


navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("open");
        document.body.classList.remove("menu-open");

        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");
        icon.classList.add("fa-bars");

    });

});


/* =========================================================
   ACTIVE NAV LINK
========================================================= */

const sections = document.querySelectorAll("section[id]");

function updateActiveLink() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === `#${currentSection}`) {
            link.classList.add("active");
        }

    });

}

window.addEventListener("scroll", updateActiveLink);


/* =========================================================
   LANGUAGE SWITCHER
   EN → FR → AR
========================================================= */

const languageBtn = document.getElementById("languageBtn");

const languages = ["en", "fr", "ar"];

let currentLanguage = localStorage.getItem("portfolioLanguage") || "en";


function setLanguage(language) {

    currentLanguage = language;

    localStorage.setItem("portfolioLanguage", language);

    document.documentElement.lang = language;

    /*
        Direction for Arabic
    */

    if (language === "ar") {
        document.documentElement.dir = "rtl";
    } else {
        document.documentElement.dir = "ltr";
    }


    /*
        Update every translated element
    */

    const translatedElements = document.querySelectorAll(
        "[data-en], [data-fr], [data-ar]"
    );

    translatedElements.forEach(element => {

        const translation = element.getAttribute(`data-${language}`);

        if (translation) {
            element.textContent = translation;
        }

    });


    /*
        Button displays the current language
    */

    languageBtn.textContent = language.toUpperCase();
}


languageBtn.addEventListener("click", () => {

    const currentIndex = languages.indexOf(currentLanguage);

    const nextIndex = (currentIndex + 1) % languages.length;

    setLanguage(languages[nextIndex]);

});


setLanguage(currentLanguage);


/* =========================================================
   REVEAL ON SCROLL
========================================================= */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(

    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                revealObserver.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================================================
   BACK TO TOP
========================================================= */

const backToTop = document.getElementById("backToTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 600) {
        backToTop.classList.add("show");
    } else {
        backToTop.classList.remove("show");
    }

});


backToTop.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});


/* =========================================================
   HEADER SHADOW ON SCROLL
========================================================= */

const header = document.getElementById("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {

        header.style.boxShadow =
            "0 10px 40px rgba(0, 0, 0, 0.15)";

    } else {

        header.style.boxShadow = "none";

    }

});


/* =========================================================
   CURRENT YEAR
========================================================= */

const year = new Date().getFullYear();

const footerYear = document.querySelector(".footer small");

if (footerYear) {

    footerYear.innerHTML =
        `© ${year} Kawther Badjadi. Built with curiosity & code.`;

}