// Scroll Progress Bar Logic
window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;

  const progressBar = document.getElementById("scroll-indicator");
  // Ensure the scroll indicator exists before trying to update its style
  if (progressBar) {
    progressBar.style.height = `${scrollPercent}%`;
  }
});

// Loading animation (requires an HTML structure for #loading and .loading-text span elements)
const loadingElement = document.getElementById("loading");
if (loadingElement) {
  const letters = document.querySelectorAll(".loading-text span");
  if (letters.length > 0) {
    gsap.to(letters, {
      opacity: 1,
      duration: 1.2,
      stagger: 0.15,
      onUpdate: function () {
        letters.forEach((el, i) => {
          gsap.to(el, {
            color: "#ffffff",
            duration: 0.2,
            delay: i * 0.15,
          });
          gsap.to(el, {
            color: "rgba(255,255,255,0.1)",
            duration: 0.2,
            delay: i * 0.15 + 0.4,
          });
          // Note: querySelector('::after') might not work directly for pseudo-elements in GSAP
          // For pseudo-elements, consider using a class toggle or animating parent/child elements.
        });
      },
      onComplete: () => {
        gsap.to("#loading", {
          opacity: 0,
          duration: 1,
          delay: 0.5,
          onComplete: () => {
            document.getElementById("loading").style.display = "none";
          },
        });
      },
    });
  } else {
    // If no loading letters, hide loading screen immediately to not block content
    loadingElement.style.display = "none";
  }
}


// Animation for Hero Text (assuming .hero-left and .hero-right exist in your HTML)
gsap.from(".hero-left", {
  opacity: 0,
  x: -50,
  duration: 1.2,
  ease: "power3.out",
});

gsap.from(".hero-right", {
  opacity: 0,
  x: 50,
  duration: 1.2,
  ease: "power3.out",
  delay: 0.3,
});

// Animation for Journey Cards
gsap.utils.toArray(".journey-card").forEach((card, index) => {
  gsap.from(card, {
    opacity: 0,
    y: 80,
    duration: .4,
    ease: "power3.out",
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reverse",
    },
    delay: index * 0.1,
  });
});

// GLOBAL PARTICLES BACKGROUND
// This will apply to the div #global-particles-background that covers the entire page
particlesJS("global-particles-background", {
  "particles": {
    "number": {
      "value": 80, // Reduced number for a more subtle effect over the entire page
      "density": { "enable": true, "value_area": 800 }
    },
    "color": { "value": "#B8C0FF" }, // Particles will be purple
    "shape": { "type": "circle" },
    "opacity": {
      "value": 0.5,
      "random": true
    },
    "size": {
      "value": 3, // Slightly smaller particles
      "random": true
    },
    "line_linked": {
      "enable": true,
      "distance": 150,
      "color": "#B8C0FF", // Lines will be purple
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 2, // Slightly slower movement
      "direction": "none",
      "out_mode": "out"
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": { "enable": true, "mode": "grab" },
      "onclick": { "enable": true, "mode": "push" }
    },
    "modes": {
      "grab": {
        "distance": 140,
        "line_linked": { "opacity": 1 }
      },
      "push": { "particles_nb": 4 }
    }
  },
  "retina_detect": true
});



// General fade-in animation for elements with class 'fade-in'
gsap.utils.toArray('.fade-in').forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 85%",
      toggleActions: "play none none none"
    },
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power3.out",
  });
});

// Animation for project cards
gsap.from(".project-card", {
  scrollTrigger: {
    trigger: ".project-card",
    start: "top 85%",
    toggleActions: "play none none reset"
  },
  opacity: 0,
  y: 60,
  duration: 1,
  ease: "power3.out"
});

// Animation for about image
gsap.from("#about-img", {
  scrollTrigger: {
    trigger: "#about-img",
    start: "top 80%",
    toggleActions: "play none none reset",
  },
  opacity: 0,
  x: -100,
  duration: .4,
  ease: "power3.out"
});

// Animation for about text
gsap.from("#about-text", {
  scrollTrigger: {
    trigger: "#about-text",
    start: "top 80%",
    toggleActions: "play none none reset",
  },
  opacity: 0,
  y: 50,
  duration: .4,
  ease: "power3.out",
  delay: 0.2
});

// Animation for tech stack title
gsap.from("#techstack h2", {
  scrollTrigger: {
    trigger: "#techstack",
    start: "top 80%",
    toggleActions: "play none none reset"
  },
  opacity: 0,
  y: -40,
  duration: 1.2,
  ease: "power3.out"
});

// Animation for tech stack groups/cards
gsap.utils.toArray("#techstack .group").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: card,
      start: "top 85%",
      toggleActions: "play none none reset"
    },
    opacity: 0,
    y: 50,
    duration: 1,
    ease: "power3.out",
    delay: i * 0.1,
  });
});

// Animation for tech categories
gsap.utils.toArray('.tech-category').forEach((section, index) => {
  gsap.from(section, {
    opacity: 0,
    y: 60,
    duration: 0.8,
    ease: "power3.out",
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reverse"
    }
  });
});

// Animation for reveal sections (general purpose)
gsap.utils.toArray('.reveal-section').forEach(section => {
  gsap.from(section, {
    opacity: 0,
    y: 60,
    duration: 1,
    scrollTrigger: {
      trigger: section,
      start: "top 80%",
      toggleActions: "play none none reset"
    }
  });
});

// Animation for upcoming projects (if #upcoming-projects exists)
gsap.utils.toArray(".upcoming-card").forEach((card, i) => {
  gsap.from(card, {
    scrollTrigger: {
      trigger: "#upcoming-projects",
      start: "top 85%",
      toggleActions: "play none none reset"
    },
    opacity: 0,
    y: 60,
    duration: 1,
    ease: "power3.out",
    delay: i * 0.15,
  });
});


/* MENU SHOW/HIDE LOGIC */
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')

/* REMOVE MENU MOBILE */
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/* SCROLL SECTIONS ACTIVE LINK */
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(sectionsClass) { // Check if sectionsClass exists before manipulating
            if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }
        }
    })
}
window.addEventListener('scroll', scrollActive)

// Optional: Add a DOMContentLoaded listener to ensure all HTML is parsed before running scripts
document.addEventListener('DOMContentLoaded', () => {
    // Call functions that need DOM elements ready
    // For example, if your loading animation or hero text animations
    // depend on these elements being fully loaded.
    // The current GSAP setup often handles this with ScrollTrigger,
    // but explicit calls here can help.
});
