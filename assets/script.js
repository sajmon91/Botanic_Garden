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

function init() {

  gsap.registerPlugin(ScrollTrigger);

  ScrollTrigger.defaults({
    // markers: true,
    start: "top center",
    toggleActions: "play none none none"
  });

  const tl1 = gsap.timeline({defaults: { ease:  'Power4.easeInOut'}});

  tl1
    .fromTo('.nav-logo', 1, { y: '-100%'}, { autoAlpha : 1, y: 0, delay: .5  })
    .to('.nav-anim', .5, { autoAlpha : 1, y: 0, stagger: .1 }, '-=.7')
    .to('.memb', { autoAlpha : 1 }, '-=.2')
    .to('.hero-text h1', .5, { autoAlpha: 1 , y: 0}, '-=1')
    .to('.hero-text p', .3, { autoAlpha: 1 , y: 0 }, '-=.8')
    .to('.hero-border', 1, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }, '-=1')
    .to('.hero-border img', .5, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', y: 0, scale: 1, ease: Back. easeOut.config( 1.7) }, '-=.2')
    .to('.hero-buttons .primary-btn', .3, { autoAlpha: 1 }, '-=.8')
    .to('.hero-buttons .secondary-btn', .3, { autoAlpha: 1 }, '-=.6');


    if(window.matchMedia('(max-width: 980px)').matches){
      gsap.to('.menu-circle', 1, { x: 0 });

      const tl2 = gsap.timeline({ 
        scrollTrigger: {
          trigger: '.discover-wrapper'
        }, 
        defaults: {
           ease: 'Power1.easeInOut,' 
        }
      });
      
    
      tl2
        .to('.discover-bottom img', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' })
        .to('.discover-top img', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }, '-=.1')
        .to('.discover-top .discover-text', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', y: 0 }, '-=.5')
        .to('.discover-plant', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', scale: 1, ease: Back. easeOut.config( 1.7) }, '-=.3');
    }else{

      const tl2 = gsap.timeline({ 
        scrollTrigger: {
          trigger: '.discover-wrapper'
        }, 
        defaults: {
           ease: 'Power1.easeInOut,' 
        }
      });
    
      tl2
        .to('.discover-top img', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' })
        .to('.discover-bottom img', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' }, '-=.1')
        .to('.discover-top .discover-text', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', y: 0 }, '-=.5')
        .to('.discover-plant', { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', scale: 1, ease: Back. easeOut.config( 1.7) }, '-=.3');
    }
  
    


  const tl3 = gsap.timeline({ 
    scrollTrigger: {
      trigger: '.news'
    }, 
    defaults: {
        ease: 'Power1.easeInOut,' 
    }
  });

  tl3
    .to('.main-news img', .5, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' })
    .to('.small-news', .5, { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)', stagger: .2 }, '-=.1')
    .from('.main-news-text h3', { autoAlpha: 0, y: 40 }, '-=.5')
    .from('.main-news-text p', { autoAlpha: 0, y: 40, stagger: .2 }, '-=.2')
    .from('.main-news-text a', { autoAlpha: 0, y: 40 }, '-=.1');


    const tl4 = gsap.timeline({ 
      scrollTrigger: {
        trigger: 'footer',
        start: "top bottom-=200px",
      }, 
      defaults: {
          ease: 'Power1.easeInOut,' 
      }
    });

    tl4
      .from('.footer-logo img', { autoAlpha: 0, y: 40})
      .from('.footer-logo .logo-text', { autoAlpha: 0, x: 40 }, '0')
      .from('.footer-text', { autoAlpha: 0, y: 40}, '-=.1')
      .from('.footer-middle h3', { autoAlpha: 0, y: 40 }, '0')
      .from('.footer-link', { autoAlpha: 0, y: 40, stagger: .1}, '-=.1')
      .from('.footer-social h3', { autoAlpha: 0, y: 40 }, '0')
      .from('.social a', { autoAlpha: 0, scale: .6, stagger: .1}, '-=.5')
      .from('.footer-bottom p', { autoAlpha: 0, y: 40 }, '-=.5');


   

}


document.addEventListener('DOMContentLoaded', init);
