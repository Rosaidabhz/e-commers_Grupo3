addEventListener("DOMContentLoaded", () => {
    const bars_menu = document.querySelector(".bars_menu")
    if (bars_menu) {
        bars_menu.addEventListener("click", () => {
            const head_link = document.querySelector(".head_link")
            head_link.classList.toggle("mostrar")
        })
    }
})




document.querySelector(".bars_menu").addEventListener("click", animateBars);

var line1_bars = document.querySelector(".line1_bars_menu");
var line2_bars = document.querySelector(".line2_bars_menu");
var line3_bars = document.querySelector(".line3_bars_menu");

function animateBars(){
    line1_bars.classList.toggle("activeline1_bars_menu");
    line2_bars.classList.toggle("activeline2_bars_menu");
    line3_bars.classList.toggle("activeline3_bars_menu");
}
