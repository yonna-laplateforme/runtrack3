function jsonValueKey() {
  const url = "data.json";
  fetch(url)
    .then((reponse) => reponse.json())
    .then((data) => console.log(data.city));
}
