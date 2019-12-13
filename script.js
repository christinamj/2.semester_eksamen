document.addEventListener("DOMContentLoaded", start);

function start() {
    hentNav();
    hentFooter();

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    document.querySelector("#menuknapluk").addEventListener("click", toggleMenu);
}

function toggleMenu() {
    console.log("toggleMenu");

    //            Burgermenuen er skjult på forsiden
    document.querySelector("#burger").classList.toggle("hidden");

    //            Hvis containerforside er synlig skal den skjules. Hvis den er skjult skal den vises
    if (document.querySelector("#containerforside")) {
        document.querySelector("#containerforside").classList.toggle("hidden");
    }

    //            Hvis menuknappen er synlig skal den skjules. Hvis den er skjult skal den vises
    if (document.querySelector("#menuknap")) {
        document.querySelector("#menuknap").classList.toggle("hidden");
    }
}
async function hentNav() {
    //henter nav.html
    const responseNav = await fetch("menu.html");

    //fortæller at indholdet i nav skal være text
    const inclusionNav = await responseNav.text();

    //indsætter nav.html ind i <nav></nav> på alle sider.
    document.querySelector("nav").innerHTML = inclusionNav;
}

async function hentFooter() {
    //henter footer.html
    const responseFooter = await fetch("footer.html");

    //fortæller at indholdet i footer skal være text
    const inclusionFooter = await responseFooter.text();

    //indsætter footer.html ind i <footer></footer> på alle sider.
    document.querySelector("footer").innerHTML = inclusionFooter;
}
