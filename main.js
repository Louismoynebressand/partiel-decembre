const logo = document.querySelector(".logo")

const menuSite = document.querySelector(".menuSite")

const liens = document.querySelector(".liens")

logo.addEventListener("click", ()=>{

    menuSite.classList.toggle("menuSiteVisible")
    liens.classList.toggle("liensVisible")

} )