const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";

    menuButton.setAttribute("aria-expanded", String(!isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Open navigation" : "Close navigation"
    );

    navigation.classList.toggle("open", !isOpen);
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      navigation.classList.remove("open");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Open navigation");
      navigation.classList.remove("open");
    }
  });
}

const year = document.querySelector("#year");
if (year) {
  year.textContent = new Date().getFullYear();
}

if (
  window.gsap &&
  !window.matchMedia("(prefers-reduced-motion: reduce)").matches
) {
  gsap.from(".hero-content > *", {
    opacity: 0,
    y: 24,
    duration: 0.7,
    stagger: 0.1,
    ease: "power2.out"
  });
}