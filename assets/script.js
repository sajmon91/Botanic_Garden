const hamburger = document.querySelector(".menu-btn");

hamburger.addEventListener("click", e => {
  if(!e.currentTarget.classList.contains("clicked")){
    hamburger.classList.add("clicked");
    gsap.to(".nav-bar", 1, { clipPath: "circle(2500px at 94% 5%)"});
    document.body.classList.add("hide");
  
  }else{
    hamburger.classList.remove("clicked");
    gsap.to(".nav-bar", 1, { clipPath: "circle(0px at 100% -20%)"});
    document.body.classList.remove("hide");
  }
});




