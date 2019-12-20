let indhold = [];
let filter = "first";
const dest = document.querySelector("#billeder");
const theTemplatePointer = document.querySelector("template");
document.addEventListener("DOMContentLoaded", start);

function start() {

    hentNav();
    //        hentFooter();

    hentJson();

    const filterKnapper = document.querySelectorAll(".filterknapper");
    filterKnapper.forEach(knap => knap.addEventListener("click", filtrerSmykker));
    document.querySelector("#menuknap").addEventListener("click", toggleMenu);
    document.querySelector("#menuknapluk").addEventListener("click", toggleMenu);
    console.log(this)

    document.querySelector("#guld").addEventListener("click", toggleGuld);
    document.querySelector("#soelv").addEventListener("click", toggleSoelv);
    document.querySelector("#vielse").addEventListener("click", toggleVielse);
    document.querySelector("#hals").addEventListener("click", toggleHals);
    document.querySelector("#broch").addEventListener("click", toggleBroche);
    document.querySelector("#perle").addEventListener("click", togglePerle);
    document.querySelector("#valgt").addEventListener("click", toggleFirst);

}


function toggleVielse() {
    document.querySelector("#smykke_tekst").classList.add("hide");
    document.querySelector("#smykke_tekst7").classList.add("hide");
    document.querySelector("#smykke_tekst3").classList.add("hide");
    document.querySelector("#smykke_tekst4").classList.add("hide");
    document.querySelector("#smykke_tekst5").classList.add("hide");
    document.querySelector("#smykke_tekst6").classList.add("hide");

    document.querySelector("#smykke_tekst2").classList.remove("hide");
}

function toggleGuld() {
    document.querySelector("#smykke_tekst").classList.add("hide");
    document.querySelector("#smykke_tekst2").classList.add("hide");
    document.querySelector("#smykke_tekst4").classList.add("hide");
    document.querySelector("#smykke_tekst5").classList.add("hide");
    document.querySelector("#smykke_tekst6").classList.add("hide");
    document.querySelector("#smykke_tekst7").classList.add("hide");

    document.querySelector("#smykke_tekst3").classList.remove("hide");

}

function toggleSoelv() {
    document.querySelector("#smykke_tekst").classList.add("hide");
    document.querySelector("#smykke_tekst2").classList.add("hide");
    document.querySelector("#smykke_tekst3").classList.add("hide");
    document.querySelector("#smykke_tekst5").classList.add("hide");
    document.querySelector("#smykke_tekst6").classList.add("hide");
    document.querySelector("#smykke_tekst7").classList.add("hide");

    document.querySelector("#smykke_tekst4").classList.remove("hide");
}


function toggleHals() {
    document.querySelector("#smykke_tekst").classList.add("hide");
    document.querySelector("#smykke_tekst2").classList.add("hide");
    document.querySelector("#smykke_tekst3").classList.add("hide");
    document.querySelector("#smykke_tekst4").classList.add("hide");
    document.querySelector("#smykke_tekst6").classList.add("hide");
    document.querySelector("#smykke_tekst7").classList.add("hide");

    document.querySelector("#smykke_tekst5").classList.remove("hide");
}

function toggleBroche() {
    document.querySelector("#smykke_tekst").classList.add("hide");
    document.querySelector("#smykke_tekst2").classList.add("hide");
    document.querySelector("#smykke_tekst3").classList.add("hide");
    document.querySelector("#smykke_tekst4").classList.add("hide");
    document.querySelector("#smykke_tekst5").classList.add("hide");
    document.querySelector("#smykke_tekst7").classList.add("hide");

    document.querySelector("#smykke_tekst6").classList.remove("hide");
}

function togglePerle() {
    document.querySelector("#smykke_tekst").classList.add("hide");
    document.querySelector("#smykke_tekst2").classList.add("hide");
    document.querySelector("#smykke_tekst3").classList.add("hide");
    document.querySelector("#smykke_tekst4").classList.add("hide");
    document.querySelector("#smykke_tekst5").classList.add("hide");
    document.querySelector("#smykke_tekst6").classList.add("hide");

    document.querySelector("#smykke_tekst7").classList.remove("hide");

}

function toggleFirst() {
    document.querySelector("#smykke_tekst7").classList.add("hide");
    document.querySelector("#smykke_tekst2").classList.add("hide");
    document.querySelector("#smykke_tekst3").classList.add("hide");
    document.querySelector("#smykke_tekst4").classList.add("hide");
    document.querySelector("#smykke_tekst5").classList.add("hide");
    document.querySelector("#smykke_tekst6").classList.add("hide");

    document.querySelector("#smykke_tekst").classList.remove("hide");
}





function toggleMenu() {
    console.log("toggleMenu");

    //            Burgermenuen er skjult på forsiden
    document.querySelector("#burger").classList.toggle("hidden");



    //            Hvis menuknappen er synlig skal den skjules. Hvis den er skjult skal den vises
    if (document.querySelector("#menuknap")) {
        document.querySelector("#menuknap").classList.toggle("hidden");
    }

    if (document.querySelector(".kategori")) {
        document.querySelector(".kategori").classList.toggle("hidden");
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

//    async function hentFooter() {
//        //henter footer.html
//        const responseFooter = await fetch("footer.html");
//
//        //fortæller at indholdet i footer skal være text
//        const inclusionFooter = await responseFooter.text();
//
//        //indsætter footer.html ind i <footer></footer> på alle sider.
//        document.querySelector("footer").innerHTML = inclusionFooter;
//    }

function filtrerSmykker() {
    filter = this.dataset.kategori;
    console.log(filter);
    visIndhold();
}

async function hentJson() {
    const url = "http://josefinewo.dk/kea/10-eksamen/wordpress/wp-json/wp/v2/galleri/?per_page=100";

    //henter data filen
    let jsonData = await fetch(url);
    //den hentee ata skal tolkes som json
    indhold = await jsonData.json();
    //kald funktion der viser data som json
    visIndhold();
}

function visIndhold() {
    dest.textContent = "";
    indhold.forEach((smykke) => {
        smykke.kategori.forEach(k => {
            if (k == filter) {
                console.log("jkvdhf", k, filter);

                const theClone = theTemplatePointer.cloneNode(true).content;
                theClone.querySelector("img").src = smykke.billede.guid;
                //theClone.querySelector("article").style.backgroundImage = smykke.billede.guid;
                dest.appendChild(theClone);

            }
        });

    });


}
