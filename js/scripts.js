// burger menu

const navMenu = () => {
  let burger = document.getElementById("burger");
  let nav = document.querySelector(".page-header__item");
  let menuBackground = document.querySelector(".menu-background");

  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-items__active");

    //burger animation

    burger.classList.toggle("burger__toggle");

    menuBackground.classList.toggle("menu-background--Active");
  });
};
navMenu();

//changing active nav-button on scroll and click

const sections = Array.from(document.querySelectorAll("section"));
const menuItems = Array.from(
  document.querySelectorAll(".navigation-list__item")
);

const highlightMenu = () => {
  let activeIndex = 0;
  sections.forEach((el, index) => {
    if (window.scrollY >= el.offsetTop) {
      activeIndex = index;
    }
  });
  console.log(window.scrollY);
  menuItems.forEach((el) => {
    el.classList.remove("navigation-list__item--active");
  });
  menuItems[activeIndex].classList.add("navigation-list__item--active");
};

window.addEventListener("scroll", highlightMenu);
menuItems.forEach((el) => {
  el.addEventListener("click", () => {
    highlightMenu();
    let burger = document.getElementById("burger");
    burger.classList.toggle("burger__toggle");
    let nav = document.querySelector(".page-header__item");
    nav.classList.toggle("nav-items__active");
  });
});

//show and hide details about the projects
function showMore() {
  let dots = document.getElementById("dots");
  let moreText = document.getElementById("more");
  let btnText = document.getElementById("readMore");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function showMore1() {
  let dots = document.getElementById("dots1");
  let moreText = document.getElementById("more1");
  let btnText = document.getElementById("readMore1");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function showMore2() {
  let dots = document.getElementById("dots2");
  let moreText = document.getElementById("more2");
  let btnText = document.getElementById("readMore2");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function showMore3() {
  let dots = document.getElementById("dots3");
  let moreText = document.getElementById("more3");
  let btnText = document.getElementById("readMore3");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function showMore4() {
  let dots = document.getElementById("dots4");
  let moreText = document.getElementById("more4");
  let btnText = document.getElementById("readMore4");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}

function showMore5() {
  let dots = document.getElementById("dots5");
  let moreText = document.getElementById("more5");
  let btnText = document.getElementById("readMore5");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Read more";
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Read less";
    moreText.style.display = "inline";
  }
}
