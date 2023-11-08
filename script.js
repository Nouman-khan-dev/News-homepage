const hamBurger = document.querySelector(".burger");
const closeBtn = document.querySelector(".close");
const menu = document.querySelector(".menu")
const overlay = document.querySelector(".overlay")

hamBurger.addEventListener("click",()=>{
    menu.style.display = "flex"
    overlay.style.display = "block"
    menu.style.transform = "translateX(0%)"
    document.body.classList.add('stop-scrolling')
})


closeBtn.addEventListener("click",()=>{
    menu.style.transform = "translateX(100%)"
    setTimeout(() => {
        menu.style.display = "none"
    }, 300);
    overlay.style.display = "none"
    document.body.classList.remove('stop-scrolling')
})