const menu = document.querySelector(".l-hamburger-menu");

document.querySelector("#js-openIcon").addEventListener("click", function () {
  menu.classList.toggle("js-open");
});

document.querySelector("#js-closeIcon").addEventListener("click", function () {
  menu.classList.remove("js-open");
});
