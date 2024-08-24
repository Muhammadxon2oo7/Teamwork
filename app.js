let hamburger=document.getElementById("hamburger");
hamburger.addEventListener("click",()=>{
    document.querySelector('.header__nav__wrapper').classList.toggle('nav__display')
})
window.addEventListener("resize", function() {
    if (window.innerWidth >= 768) document.querySelector('.header__nav__wrapper').classList.remove("nav__display");
  });