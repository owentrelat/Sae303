import "./style.css"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)


gsap.from(".header-h1", {
  duration: 1.2,
  opacity: 0,
  y: 50,
  delay: 0.3,
  ease: "power3.out"
})

gsap.from(".header-title", {
  duration: 1,
  opacity: 0,
  x: -30,
  delay: 0.5,
  ease: "power3.out"
})

gsap.from(".header-description", {
  duration: 1,
  opacity: 0,
  x: -30,
  delay: 0.7,
  ease: "power3.out"
})

gsap.to(".header-image1", {
  duration: 4,
  y: -20,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
})

gsap.to(".header-image2", {
  duration: 5,
  y: 20,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 0.5
})

gsap.to(".header-image3", {
  duration: 4.5,
  y: -15,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 1
})

gsap.to(".header-image4", {
  duration: 5.5,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 1.5
})

gsap.from(".description-lea-image", {
  scrollTrigger: {
    trigger: ".description-lea",
    start: "top 80%",
    end: "top 20%",
    scrub: 0.5
  },
  opacity: 0,
  y: 100,
  duration: 1
})

gsap.from(".description-lea-description", {
  scrollTrigger: {
    trigger: ".description-lea",
    start: "top 80%",
    end: "top 20%",
    scrub: 0.5
  },
  opacity: 0,
  x: 100,
  duration: 1
})

gsap.from(".description-pixi-image", {
  scrollTrigger: {
    trigger: ".description-pixi",
    start: "top 60%",
    end: "top 40%",
    scrub: 0.5
  },
  opacity: 0,
  y: 100,
  duration: 1
})

gsap.from(".description-pixi-description", {
  scrollTrigger: {
    trigger: ".description-pixi",
    start: "top 80%",
    end: "top 20%",
    scrub: 0.5
  },
  opacity: 0,
  x: -100,
  duration: 1
})

gsap.from(".seven-hour-title", {
  scrollTrigger: {
    trigger: ".seven-hour",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  y: 30,
  ease: "power2.out"
})

gsap.from(".seven-hour-lea", {
  scrollTrigger: {
    trigger: ".seven-hour",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  x: -50,
  ease: "power2.out",
  delay: 0.2
})

gsap.from(".seven-hour-pixi", {
  scrollTrigger: {
    trigger: ".seven-hour",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  x: 50,
  ease: "power2.out",
  delay: 0.2
})

gsap.to(".seven-hour-lea-image", {
  duration: 6,
  repeat: -1,
  ease: "none"
})

gsap.from(".mail-titre", {
  scrollTrigger: {
    trigger: ".mail",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  scale: 0.8,
  ease: "back.out",
  delay: 0.2
})

gsap.from(".mail-texte", {
  scrollTrigger: {
    trigger: ".mail",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  y: 40,
  ease: "power2.out",
  stagger: 0.2
})

gsap.to(".mail-image-mail", {
  duration: 8,
  translateY: 500,
  repeat: -1,
  ease: "none"
})

gsap.to(".mail-image-pixi", {
  duration: 1,
  translateX: 20,
  repeat: -1,
  ease: "none",
  yoyo: true
})

gsap.from(".trajet-titre", {
  scrollTrigger: {
    trigger: ".trajet",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  x: -50,
  ease: "power2.out"
})

gsap.from(".trajet-texte", {
  scrollTrigger: {
    trigger: ".trajet",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  y: 40,
  ease: "power2.out",
  delay: 0.2
})

gsap.to(".trajet-image", {
  duration: 19,
  rotation: 360,
  repeat: -1,
  ease: "none"
})

gsap.from(".trajet-description", {
  duration: 19,
  rotation: -360,
  repeat: -1,
  ease: "none"
})

gsap.from(".travail-title", {
  scrollTrigger: {
    trigger: ".travail",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  y: -30,
  ease: "power2.out"
})

gsap.from(".card", {
  scrollTrigger: {
    trigger: ".cards-container",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  y: 50,
  stagger: 0.2,
  ease: "power2.out"
})

document.querySelectorAll(".card").forEach(card => {
  card.addEventListener("mouseenter", function() {
    gsap.to(this, {
      duration: 0.3,
      y: -10,
      boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
      ease: "power2.out"
    })
  })
  
  card.addEventListener("mouseleave", function() {
    gsap.to(this, {
      duration: 0.3,
      y: 0,
      boxShadow: "none",
      ease: "power2.out"
    })
  })
})

gsap.from(".dejeuner-title", {
  scrollTrigger: {
    trigger: ".dejeuner",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  y: 30,
  ease: "power2.out"
})

gsap.from(".info-bubble", {
  scrollTrigger: {
    trigger: ".dejeuner",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  scale: 0.5,
  stagger: 0.2,
  ease: "back.out"
})

// Animation tremblement de voiture à l'arrêt (moteur qui tourne)
gsap.to(".voiture", {
  duration: 0.15,
  y: 1,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
})

gsap.to(".voiture", {
  duration: 0.12,
  x: 1,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 0.05
})

gsap.to(".computer", {
  duration: 5,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
})

gsap.from(".cloud-title", {
  scrollTrigger: {
    trigger: ".cloud",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  x: -50,
  ease: "power2.out"
})

gsap.from(".cloud-description", {
  scrollTrigger: {
    trigger: ".cloud",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  x: -50,
  ease: "power2.out",
  delay: 0.2
})

gsap.to(".nuage", {
  duration: 6,
  x: 30,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
})

gsap.to(".datacenter", {
  duration: 4,
  y: -20,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 0.3
})

gsap.from(".consumption-end-title", {
  scrollTrigger: {
    trigger: ".consumption-end",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  y: -30,
  ease: "power2.out"
})

gsap.from(".consumption-text", {
  scrollTrigger: {
    trigger: ".consumption-end",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  scale: 0.8,
  ease: "back.out",
  delay: 0.2
})

gsap.to(".phone-illustration", {
  duration: 5,
  opacity: 0.4,
  repeat: -1,
  ease: "none"
})

gsap.to(".light-illustration", {
  duration: 5,
  opacity: 0.4,
  repeat: -1,
  ease: "none"
})

gsap.to(".pixi-character", {
  duration: 4,
  y: -15,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
})

gsap.from(".gaming-title", {
  scrollTrigger: {
    trigger: ".gaming",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  y: 30,
  ease: "power2.out"
})

gsap.from(".gaming-text", {
  scrollTrigger: {
    trigger: ".gaming",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  x: -50,
  ease: "power2.out",
  delay: 0.2
})

gsap.to(".gaming-phone", {
  duration: 4,
  x: 20,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
})

gsap.to(".gaming-laptop", {
  duration: 4.5,
  y: -20,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut",
  delay: 0.5
})

gsap.from(".sleep-title", {
  scrollTrigger: {
    trigger: ".sleep",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  scale: 0.8,
  ease: "back.out"
})

gsap.from(".sleep-lea", {
  scrollTrigger: {
    trigger: ".sleep",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  y: 50,
  ease: "power2.out",
  delay: 0.2
})

gsap.from(".sleep-text", {
  scrollTrigger: {
    trigger: ".sleep",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  x: (i) => i % 2 === 0 ? -50 : 50,
  stagger: 0.2,
  ease: "power2.out"
})

gsap.to(".sleep-city", {
  duration: 7,
  x: 40,
  repeat: -1,
  yoyo: true,
  ease: "sine.inOut"
})

gsap.from(".footer-title", {
  scrollTrigger: {
    trigger: ".footer",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  scale: 0.8,
  ease: "back.out"
})

gsap.from(".cards", {
  scrollTrigger: {
    trigger: ".footer-container",
    start: "top 70%"
  },
  duration: 0.8,
  opacity: 0,
  y: 50,
  stagger: 0.2,
  ease: "power2.out"
})

document.querySelectorAll(".cards").forEach(card => {
  card.addEventListener("mouseenter", function() {
    gsap.to(this, {
      duration: 0.3,
      y: -10,
      ease: "power2.out"
    })
  })
  
  card.addEventListener("mouseleave", function() {
    gsap.to(this, {
      duration: 0.3,
      y: 0,
      ease: "power2.out"
    })
  })
})

gsap.to(".description-lea-shape", {
  scrollTrigger: {
    trigger: ".description",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 0.5
  },
  y: 100,
  duration: 1
})

gsap.to(".description-flower", {
  scrollTrigger: {
    trigger: ".description",
    start: "top 80%",
    end: "bottom 20%",
    scrub: 0.5
  },
  y: -100,
  duration: 1
})