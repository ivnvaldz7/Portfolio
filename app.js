window.onscroll = () => {
  if (document.documentElement.scrollTop > 100) {
    document.querySelector(".go").classList.add("show");
  } else {
    document.querySelector(".go").classList.remove("show");
  }
};
document.querySelector(".go").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
