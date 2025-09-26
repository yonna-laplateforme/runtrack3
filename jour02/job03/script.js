function addone() {
  let compteur = 0;
  let element = document.getElementById("compteur");

  let button = document.getElementById("button");

  button.addEventListener("click", function () {
    compteur++;
    element.innerHTML = compteur;
  });
}

addone();
