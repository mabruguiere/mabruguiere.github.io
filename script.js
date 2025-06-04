window.addEventListener("scroll", () => {
    const header = document.getElementById("header-accueil");
    if(window.scrollY === 0){
        header.classList.remove("scrolled");
    }else{
        header.classList.add("scrolled");
    }
})