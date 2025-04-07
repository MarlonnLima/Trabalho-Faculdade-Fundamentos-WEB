const topButton = document.querySelector(".topButton");

window.onscroll = () => {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
};

topButton.onclick = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};