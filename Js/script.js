// Apparition de la nav bar pour mobile
let lastScroll = 0;
const nav = document.querySelector(".mobile-nav")
window.addEventListener("scroll",() =>{
    let currentScroll = window.pageYOffset;

    if (Math.abs(currentScroll - lastScroll)<10) return;
    if (currentScroll > lastScroll){
        nav.classList.add("hide");
    }else{
        nav.classList.remove("hide")
    }
    lastScroll = currentScroll;
})
