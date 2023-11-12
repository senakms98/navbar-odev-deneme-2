const burger=document.querySelector(".burger-box")
const mobileMenu=document.querySelector(".mobile-menu")
burger.addEventListener("click", function(){
    if (mobileMenu.classList.contains("show")) {
        mobileMenu.classList.remove("show")
    }else {
        mobileMenu.classList.add("show")
    }
})