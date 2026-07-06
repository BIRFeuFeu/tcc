const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

hamburger.addEventListener("click", () => {

    menu.classList.toggle("show");

});


window.addEventListener("scroll",()=>{

const navbar=document.querySelector(".navbar");

navbar.classList.toggle("scrolled",window.scrollY>40);

});


const reveals=document.querySelectorAll(".reveal");

function reveal(){

reveals.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.classList.add("active");

}

});

}

window.addEventListener("scroll",reveal);

reveal();
