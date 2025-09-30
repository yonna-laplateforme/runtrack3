const piedDePage = document.querySelector("footer");

window.addEventListener("scroll", () => {
  const hauteurPage =
    document.documentElement.scrollHeight - window.innerHeight;
  const positionScroll = window.scrollY;
  const pourcentageScroll = (positionScroll / hauteurPage) * 100;

  const teinte = 320 - (320 - 240) * (pourcentageScroll / 100);

  const couleur = `hsl(${teinte}, 100%, 60%, 30%)`;
  piedDePage.style.backgroundColor = couleur;
});
