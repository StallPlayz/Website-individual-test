// IKON

feather.replace();

// HAMBURGER

const hamburger = document.getElementById("hamburger-menu");
const navigation = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navigation.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navigation.contains(e.target)) {
    hamburger.classList.remove("active");
    navigation.classList.remove("active");
  }
});