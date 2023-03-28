const menuIcon = document.querySelector(".menu-icon")
let nav = document.getElementById("nav")
let p = document.getElementById("para")


// toggle show and hide nav links ---------------------
menuIcon.addEventListener('click', function() {    
    if (nav.style.display == "none" ){
        nav.style.display = "block"
    } 
    else {
        nav.style.display = "none"
        nav.style.transition = "0.3s ease"
    }
})
