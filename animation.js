document.addEventListener("DOMContentLoaded", sidenVises);


function sidenVises() {
    console.log("sidenVises");

    //Mouseover dadaisme
    document.querySelectorAll(".img_border").forEach(ib => {
        ib.addEventListener("mouseover", animation);

    });




}



// ANIMATION

function animation() {
    console.log("animation", this.querySelector(".img"));

    this.querySelector(".img").classList.add("img_animation");

    this.querySelector(".border").classList.add("border_animation");

    this.addEventListener("animationend", noAnimation);
}



function noAnimation() {
    console.log("noAnimation");

    this.querySelector(".img").classList.remove("img_animation");


    this.querySelector(".border").classList.remove("border_animation");

}
