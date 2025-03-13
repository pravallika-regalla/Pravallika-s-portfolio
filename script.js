const titles = [
  "UI/UX Devloper",
  "Angular Developer",
  "Enthusiastic Video Editor"
];

let index = 0;
const titleElement = document.getElementById("animated-title");

function changeTitle() {
  titleElement.style.opacity = 0; // Start fade-out effect
  setTimeout(() => {
      titleElement.innerHTML = titles[index]; // Change text
      titleElement.style.opacity = 1; // Fade-in effect
      index = (index + 1) % titles.length; // Loop through titles
  }, 400); // Wait 1s before changing text
}

document.addEventListener("DOMContentLoaded", function () {
    // Mobile Menu Toggle
    window.toggleMenu = function () {
        const menu = document.querySelector(".menu-links");
        const icon = document.querySelector(".hamburger-icon");
        menu.classList.toggle("open");
        icon.classList.toggle("open");
    };

    // Scroll Animations
    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible");
                }
            });
        },
        { threshold: 0.2 }
    );

    elementsToAnimate.forEach((element) => observer.observe(element));
});

// Change title every 3 seconds
setInterval(changeTitle, 900);

function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
    const certificationCards = document.querySelectorAll(".certification-card");
    const icons = document.querySelectorAll(".meta-icon, .google-icon");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                } else {
                    entry.target.classList.remove("visible"); // Remove to re-trigger animation
                }
            });
        },
        {
            root: null,  // Uses viewport as root
            rootMargin: "0px",  // No margin offset
            threshold: 0.1,  // Trigger when 10% of element is visible
        }
    );

    certificationCards.forEach((card) => observer.observe(card));
    icons.forEach((icon) => observer.observe(icon));
});


document.addEventListener("DOMContentLoaded", function () {
  console.log("Animation script loaded!"); // Debug log

  const sections = document.querySelectorAll("section");

  if (sections.length === 0) {
      console.error("No sections found! Ensure your sections exist in HTML.");
      return;
  }

  console.log(`Found ${sections.length} sections.`); // Debug log

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("active"); // Activate section immediately
                  observer.unobserve(entry.target); // Stop observing once animated
              }
          });
      },
      {
          threshold: 0.1, // Reduce threshold so animation starts earlier
          rootMargin: "0px 0px -10% 0px" // Start animation slightly before it enters view
      }
  );

  sections.forEach((section) => {
      section.classList.add("section-slide"); // Apply animation class
      observer.observe(section);
  });

  console.log("Observer initialized!");
});


document.addEventListener("DOMContentLoaded", function () {
  const techCards = document.querySelectorAll(".tech-card");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry, index) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("reveal");
                  entry.target.style.animationDelay = `${index * 0.1}s`;
              } else {
                  entry.target.classList.remove("reveal"); // Remove effect if scrolled out
              }
          });
      },
      {
          threshold: 0.2, // Adjusts when animation triggers (20% in view)
      }
  );

  techCards.forEach((card) => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", function () {
  const projectCards = document.querySelectorAll(".project-card");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  entry.target.classList.add("show");
              } else {
                  entry.target.classList.remove("show"); // Reset animation when scrolling back up
              }
          });
      },
      {
          threshold: 0.2, // Adjusts how early the animation triggers
      }
  );

  projectCards.forEach((card) => observer.observe(card));
});

document.addEventListener("DOMContentLoaded", function () {
    const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible"); // Add animation class when visible
                } else {
                    entry.target.classList.remove("visible"); // Remove to allow re-triggering
                }
            });
        },
        {
            root: null, // Uses viewport
            rootMargin: "0px 0px -10px 0px", // Ensures early triggering
            threshold: 0.05, // Triggers when 5% of element is visible (slow scrolling support)
        }
    );

    elementsToAnimate.forEach((element) => observer.observe(element));
});


document.addEventListener("DOMContentLoaded", function () {
    const aboutWrapper = document.querySelector(".about-wrapper");

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    aboutWrapper.classList.add("active");
                } else {
                    aboutWrapper.classList.remove("active"); // Remove class when out of view
                }
            });
        },
        {
            threshold: 0.5, // Adjust for earlier/later trigger
        }
    );

    observer.observe(aboutWrapper);
});
