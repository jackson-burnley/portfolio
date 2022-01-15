const nav = document.querySelectorAll("nav li a");

nav.forEach((item) => {
  item.addEventListener("click", function (event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: "smooth",
    });
  });
});
