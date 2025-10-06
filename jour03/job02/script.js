const mesDivs = ["#img1", "#img2", "#img3", "#img4", "#img5", "#img6"];
$("#melange").click(() => {
  mesDivs.forEach((img) => {
    $(img).after($(mesDivs[getRandomInt(6)]));
  });
});

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

mesDivs.forEach((img) => {
  $(img).click((e) => {
    $(e.currentTarget).appendTo("#resultat");
  });

  mesDivs.forEach((img) => {
    $(img).click((e) => {
      const siClique = $(e.currentTarget);

      if (siClique.parent().is("#resultat")) return;

      siClique.appendTo("#resultat");

      if ($("#resultat > div").length === 6) {
        verifierOrdre();
      }
    });
  });
});

function verifierOrdre() {
  const ordre = $("#resultat > div")
    .map(function () {
      return $(this).data("img");
    })
    .get();

  const estGagnant = ordre.join() === ["1", "2", "3", "4", "5", "6"].join();

  if (estGagnant) {
    $("#message").text("Vous avez gagné !").css("color", "green");
  } else {
    $("#message").text(" Vous avez perdu !").css("color", "red");
  }
  setTimeout(function () {
    window.location.href = "index.html";
  }, 2000);
}
