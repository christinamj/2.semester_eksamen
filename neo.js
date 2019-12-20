let side;
const url = "http://josefinewo.dk/kea/10-eksamen/wordpress/wp-json/wp/v2/posts/195";

document.addEventListener("DOMContentLoaded", start);


function start() {
    console.log("start")
    hentJson();
}

async function hentJson() {
    console.log("hent jason")

    const response = await fetch(url);
    side = await response.json();

    visIndhold();
}

function visIndhold() {
    console.log("tekst")

    document.querySelector(".side").innerHTML = side.content.rendered;
    console.log(this)

}
