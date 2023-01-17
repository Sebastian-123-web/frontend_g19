
const menuBurger = document.querySelector('.menu-burger');
const closeBurger = document.querySelector('.close-burger');
const nevagacion = document.querySelector('#nevagacion');
const a = document.querySelectorAll('a');

menuBurger.onclick = function(){
    nevagacion.style.display = "flex";
    closeBurger.style.zIndex = "9";
    closeBurger.style.display = "flex";
}

const closeA = () => {
    const pageWidth  = document.documentElement.scrollWidth;
    if( pageWidth > 600 ){
        return
    }
    nevagacion.style.display = "none";
    closeBurger.style.display = "none";
    nevagacion.style.justifyContent = "center";
    nevagacion.style.alignItems = "center";
}

closeBurger.onclick = closeA;

a[1].onclick = closeA;
a[2].onclick = closeA;
a[3].onclick = closeA;