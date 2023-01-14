
const menuBurger = document.querySelector('.menu-burger');
const closeBurger = document.querySelector('.close-burger');
const nevagacion = document.querySelector('#nevagacion');
menuBurger.onclick = function(){
    nevagacion.style.display = "flex";
    closeBurger.style.zIndex = "9";
    closeBurger.style.display = "flex";
}
closeBurger.onclick = function(){
    nevagacion.style.display = "none";
    closeBurger.style.display = "none";
    console.log(screen.width)
}