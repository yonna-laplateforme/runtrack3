// getData("expression.txt");
async function getData() {
  const url = "expression.txt";

  const response = await fetch(url);
  const result = await response.text();

  const paragraphe = document.querySelector("p");
  paragraphe.innerText = result;
}

button.addEventListener("click", getData);
