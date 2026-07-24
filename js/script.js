/* ==========================================
   VARIABLES
========================================== */

const header = document.querySelector(".header");
const menuBtn = document.getElementById("menu-btn");
const navbar = document.querySelector(".navbar");
const navLinks = document.querySelectorAll(".navbar a");

const themeBtn = document.getElementById("theme-toggle");

const scrollBtn = document.getElementById("scrollTop");

const preloader = document.getElementById("preloader");

/* ==========================================
   PRELOADER
========================================== */

window.addEventListener("load", () => {

setTimeout(() => {

preloader.style.opacity = "0";

preloader.style.visibility = "hidden";

}, 700);

});

/* ==========================================
   HEADER ON SCROLL
========================================== */

window.addEventListener("scroll", () => {

if (window.scrollY > 60) {

header.classList.add("scrolled");

} else {

header.classList.remove("scrolled");

}

});

/* ==========================================
   MOBILE MENU
========================================== */

menuBtn.addEventListener("click", () => {

navbar.classList.toggle("active");

const icon = menuBtn.querySelector("i");

if (navbar.classList.contains("active")) {

icon.classList.remove("fa-bars");

icon.classList.add("fa-xmark");

} else {

icon.classList.remove("fa-xmark");

icon.classList.add("fa-bars");

}

});

/* ==========================================
   CLOSE MENU AFTER CLICK
========================================== */

navLinks.forEach(link => {

link.addEventListener("click", () => {

navbar.classList.remove("active");

const icon = menuBtn.querySelector("i");

icon.classList.remove("fa-xmark");

icon.classList.add("fa-bars");

});

});

/* ==========================================
   ACTIVE LINK ON SCROLL
========================================== */

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;

const sectionHeight = section.clientHeight;

if (scrollY >= sectionTop) {

current = section.getAttribute("id");

}

});

navLinks.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href") === "#" + current) {

link.classList.add("active");

}

});

});
/* ==========================================
   DARK / LIGHT MODE
========================================== */

const body = document.body;

// Load saved theme
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
  body.classList.add("light");
  themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
} else {
  themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
}

themeBtn.addEventListener("click", () => {

  body.classList.toggle("light");

  if (body.classList.contains("light")) {

    localStorage.setItem("theme", "light");

    themeBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';

  } else {

    localStorage.setItem("theme", "dark");

    themeBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';

  }

});

/* ==========================================
   SCROLL TO TOP
========================================== */

window.addEventListener("scroll", () => {

  if (window.scrollY > 300) {

    scrollBtn.classList.add("show");

  } else {

    scrollBtn.classList.remove("show");

  }

});

scrollBtn.addEventListener("click", () => {

  window.scrollTo({

    top: 0,

    behavior: "smooth"

  });

});

/* ==========================================
   REVEAL ON SCROLL
========================================== */

const revealElements = document.querySelectorAll(
  ".service-card, .skill-card, .project-card, .about-image, .about-content, .contact-item, .contact-form"
);

function reveal() {

  const windowHeight = window.innerHeight;

  revealElements.forEach((element) => {

    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < windowHeight - 120) {

      element.classList.add("active", "fade-in");

    }

  });

}

window.addEventListener("scroll", reveal);

window.addEventListener("load", reveal);

/* ==========================================
   SMOOTH SCROLL FOR LINKS
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", function (e) {

    const target = document.querySelector(this.getAttribute("href"));

    if (!target) return;

    e.preventDefault();

    target.scrollIntoView({

      behavior: "smooth",

      block: "start"

    });

  });

});
/* ==========================================
   TYPING EFFECT
========================================== */

const typingElement = document.querySelector(".home-text h2");

const words = [
  "Full Stack Developer",
  "Frontend Developer",
  "Backend Developer",
  "UI / UX Designer",
  "Web Designer"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typingEffect() {

  if (!typingElement) return;

  const currentWord = words[wordIndex];

  if (!deleting) {

    typingElement.textContent = currentWord.substring(0, charIndex + 1);

    charIndex++;

    if (charIndex === currentWord.length) {

      deleting = true;

      setTimeout(typingEffect, 1500);

      return;

    }

  } else {

    typingElement.textContent = currentWord.substring(0, charIndex - 1);

    charIndex--;

    if (charIndex === 0) {

      deleting = false;

      wordIndex++;

      if (wordIndex >= words.length) {

        wordIndex = 0;

      }

    }

  }

  setTimeout(typingEffect, deleting ? 60 : 110);

}

typingEffect();

/* ==========================================
   COUNTER ANIMATION
========================================== */

const counters = document.querySelectorAll(".about-info h4");

let counterStarted = false;

function runCounters() {

  if (counterStarted) return;

  const aboutSection = document.querySelector(".about");

  if (!aboutSection) return;

  const top = aboutSection.getBoundingClientRect().top;

  if (top > window.innerHeight - 150) return;

  counterStarted = true;

  counters.forEach(counter => {

    const target = parseInt(counter.textContent);

    let current = 0;

    const step = Math.max(1, Math.ceil(target / 50));

    const timer = setInterval(() => {

      current += step;

      if (current >= target) {

        current = target;

        clearInterval(timer);

      }

      counter.textContent = current + "+";

    }, 30);

  });

}

window.addEventListener("scroll", runCounters);

window.addEventListener("load", runCounters);

/* ==========================================
   SKILL BAR ANIMATION
========================================== */

const skillBars = document.querySelectorAll(".bar");

function animateSkills() {

  const skillsSection = document.querySelector(".skills");

  if (!skillsSection) return;

  const sectionTop = skillsSection.getBoundingClientRect().top;

  if (sectionTop > window.innerHeight - 120) return;

  skillBars.forEach(bar => {

    const width = bar.classList.contains("html") ? "95%" :
                  bar.classList.contains("css") ? "92%" :
                  bar.classList.contains("js") ? "90%" :
                  bar.classList.contains("firebase") ? "86%" : "100%";

    bar.style.width = width;

  });

}

window.addEventListener("scroll", animateSkills);

window.addEventListener("load", animateSkills);

/* ==========================================
   PARALLAX HERO
========================================== */

window.addEventListener("scroll", () => {

  const hero = document.querySelector(".home");

  if (!hero) return;

  hero.style.backgroundPositionY = `${window.scrollY * 0.4}px`;

});
/* ==========================================
   CURSOR GLOW EFFECT
========================================== */

const cursor = document.createElement("div");
cursor.className = "cursor-glow";
document.body.appendChild(cursor);

document.addEventListener("mousemove", (e) => {
  cursor.style.left = `${e.clientX}px`;
  cursor.style.top = `${e.clientY}px`;
});

/* ==========================================
   SCROLL PROGRESS BAR
========================================== */

const progressBar = document.createElement("div");
progressBar.className = "scroll-progress";
document.body.appendChild(progressBar);

function updateProgressBar() {
  const scrollTop = window.scrollY;
  const documentHeight =
    document.documentElement.scrollHeight - window.innerHeight;

  const progress = (scrollTop / documentHeight) * 100;

  progressBar.style.width = `${progress}%`;
}

window.addEventListener("scroll", updateProgressBar);
window.addEventListener("load", updateProgressBar);

/* ==========================================
   LAZY LOADING IMAGES
========================================== */

const lazyImages = document.querySelectorAll("img");

const observer = new IntersectionObserver(
  (entries, obs) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      const img = entry.target;

      if (img.dataset.src) {
        img.src = img.dataset.src;
      }

      img.classList.add("loaded");

      obs.unobserve(img);
    });
  },
  {
    threshold: 0.2,
  }
);

lazyImages.forEach((img) => observer.observe(img));

/* ==========================================
   SIMPLE FADE-IN FOR SECTIONS
========================================== */

const sectionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;

      entry.target.classList.add("visible");
    });
  },
  {
    threshold: 0.15,
  }
);

sections.forEach((section) => {
  sectionObserver.observe(section);
});

/* ==========================================
   RESIZE HANDLER
========================================== */

window.addEventListener("resize", () => {
  if (window.innerWidth > 992) {
    navbar.classList.remove("active");

    const icon = menuBtn.querySelector("i");

    if (icon) {
      icon.classList.remove("fa-xmark");
      icon.classList.add("fa-bars");
    }
  }
});

/* ==========================================
   CONSOLE MESSAGE
========================================== */

console.log(
  "%cYasso Portfolio V2",
  "color:#3b82f6;font-size:24px;font-weight:bold;"
);

console.log(
  "%cDesigned & Developed by Yasso",
  "color:#94a3b8;font-size:14px;"
);

/* ==========================================
   END OF FILE
========================================== */
const form = document.getElementById("contact-form");
const status = document.getElementById("form-status");
const btn = document.getElementById("send-btn");

form.addEventListener("submit", () => {
    btn.disabled = true;
    btn.innerHTML = "Sending...";
});