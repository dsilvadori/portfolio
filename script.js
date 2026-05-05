const header = document.querySelector("[data-header]");
const navToggle = document.querySelector("[data-nav-toggle]");
const navMenu = document.querySelector("[data-nav-menu]");
const filterButtons = document.querySelectorAll("[data-filter]");
const projectCards = document.querySelectorAll(".project-card");

const setHeaderState = () => {
  header.classList.toggle("is-scrolled", window.scrollY > 16);
};

const closeMenu = () => {
  navToggle.setAttribute("aria-expanded", "false");
  navMenu.classList.remove("is-open");
  document.body.classList.remove("is-menu-open");
};

setHeaderState();
window.addEventListener("scroll", setHeaderState, { passive: true });

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  navToggle.setAttribute("aria-expanded", String(!isOpen));
  navMenu.classList.toggle("is-open", !isOpen);
  document.body.classList.toggle("is-menu-open", !isOpen);
});

navMenu.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    closeMenu();
  }
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;

    filterButtons.forEach((item) => {
      item.classList.toggle("is-active", item === button);
    });

    projectCards.forEach((card) => {
      const categories = card.dataset.category.split(" ");
      const shouldShow = selectedFilter === "all" || categories.includes(selectedFilter);
      card.classList.toggle("is-hidden", !shouldShow);
    });
  });
});

const animatedElements = document.querySelectorAll(".section, .project-card, .skill-card, .timeline-item");

animatedElements.forEach((element) => {
  element.setAttribute("data-animate", "");
});

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  animatedElements.forEach((element) => observer.observe(element));
} else {
  animatedElements.forEach((element) => element.classList.add("is-visible"));
}
