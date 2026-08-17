/* =========================================================
   MOBILE MENU
========================================================= */

const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");


menuBtn.addEventListener("click", () => {

    navigation.classList.toggle("active");


    const icon = menuBtn.querySelector("i");


    if (navigation.classList.contains("active")) {

        icon.classList.remove("fa-bars");

        icon.classList.add("fa-xmark");

    } else {

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    }

});


/* Close menu after clicking a navigation link */

document.querySelectorAll(".navigation a").forEach(link => {

    link.addEventListener("click", () => {

        navigation.classList.remove("active");


        const icon = menuBtn.querySelector("i");

        icon.classList.remove("fa-xmark");

        icon.classList.add("fa-bars");

    });

});


/* =========================================================
   LANGUAGE SWITCHER
========================================================= */

const languageBtn =
    document.getElementById("languageBtn");


let currentLanguage = "en";


function changeLanguage(language) {

    currentLanguage = language;


    document.documentElement.lang = language;


    document.querySelectorAll("[data-en]").forEach(element => {

        const text =
            element.getAttribute(`data-${language}`);


        if (text) {

            element.textContent = text;

        }

    });


    /*
       Button shows the language
       you can switch TO.
    */

    languageBtn.textContent =
        language === "en"
            ? "FR"
            : "EN";

}


/* Toggle language */

languageBtn.addEventListener("click", () => {

    const newLanguage =
        currentLanguage === "en"
            ? "fr"
            : "en";


    changeLanguage(newLanguage);

});


/* =========================================================
   INITIAL LANGUAGE
========================================================= */

changeLanguage("en");