document.addEventListener("DOMContentLoaded", sidenVises);


function sidenVises() {
    console.log("sidenVises");

    //forside
    document.querySelectorAll("#kontakt_billede").forEach(ib => {
        ib.addEventListener("mouseover", animation);

    });

}

// ANIMATION

function animation() {
    console.log(this);

    this.querySelector(".billedekontakt").classList.add("img_animation");

    this.querySelector(".borderkontakt").classList.add("border_animation");

    this.addEventListener("animationEnd", noAnimation);

}



function noAnimation() {
    console.log("noAnimation");

    this.querySelector(".billedekontakt").classList.remove("img_animation");



    this.querySelector(".borderkontakt").classList.remove("border_animation");


}
