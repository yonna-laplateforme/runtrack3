let allPokemons = [];

function init() {
  chargerDonnees().then(() => {
    afficherResultats(allPokemons);
    initialiserEvenements();
  });
}

async function chargerDonnees() {
  const response = await fetch("pokemon.json");
  const data = await response.json();
  allPokemons = data;
}

function initialiserEvenements() {
  document
    .getElementById("filtreBtn")
    .addEventListener("click", filtrerPokemons);
}

function filtrerPokemons() {
  const id = document.getElementById("id").value.trim();
  const nom = document.getElementById("name").value.trim().toLowerCase();
  const type = document.getElementById("type").value;

  const pokemonsFiltres = allPokemons.filter((pokemon) => {
    const correspondId = id === "" || pokemon.id.toString() === id;
    const correspondNom =
      nom === "" || pokemon.name.french.toLowerCase().includes(nom);
    const correspondType =
      type === "" ||
      (Array.isArray(pokemon.type)
        ? pokemon.type.includes(type)
        : pokemon.type === type);

    return correspondId && correspondNom && correspondType;
  });

  afficherResultats(pokemonsFiltres);
}

function afficherResultats(pokemons) {
  const divResultats = document.getElementById("resultats");
  divResultats.innerHTML = "";

const liste = document.createElement("ul");

  pokemons.forEach((pokemon) => {
    const item = document.createElement("li");
    item.textContent = `#${pokemon.id} - ${
      pokemon.name.french
    } (${pokemon.type.join(", ")})`;
    liste.appendChild(item);
  });

  divResultats.appendChild(liste);
}

init();
