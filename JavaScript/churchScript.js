/** Index Page Script  */
// Change navigation background color on scroll
function changeNav() {
  let navbar = document.getElementById("navbar");
  let scrollValue = window.scrollY;
  if (scrollValue < 400) {
    navbar.classList.remove("headerColor");
  } else {
    navbar.classList.add("headerColor"); 
  }
}

window.addEventListener("scroll", changeNav);

// Change header font color on scroll
document.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 400) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
