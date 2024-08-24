let hamburger=document.getElementById("hamburger");
hamburger.addEventListener("click",()=>{
    document.querySelector('.header__nav__wrapper').classList.toggle('nav__display')
})
window.addEventListener("resize", function() {
    if (window.innerWidth >= 768) document.querySelector('.header__nav__wrapper').classList.remove("nav__display");
  });

  document.addEventListener("DOMContentLoaded", function() {
    const svgPaths = document.querySelectorAll("svg path");
    const tooltip = document.getElementById('tooltip');

    svgPaths.forEach(path => {
        path.addEventListener('mouseenter', function() {
            tooltip.innerHTML ='country name:'+'  '+ this.getAttribute('class'); // Tooltipga ma'lumotni joylash
            tooltip.style.display = 'block';
        });

        path.addEventListener('mousemove', function(e) {
            tooltip.style.top = `${e.pageY + 10}px`; // Tooltipni kursorning yuqorisida joylash
            tooltip.style.left = `${e.pageX + 10}px`; // Tooltipni kursorning o'ng tomonida joylash
        });

        path.addEventListener('mouseleave', function() {
            tooltip.style.display = 'none'; // Tooltipni yashirish
        });
    });
});