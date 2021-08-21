document.addEventListener("scroll", () => {
    const scrollOffset = window.scrollY;
    const navbar = document.querySelector("nav");
    const navbarHeight = navbar.scrollHeight;

    if (scrollOffset > navbarHeight/2) {
      navbar.classList.add("scrolled")
    } else {
      navbar.classList.remove("scrolled")
    }
});