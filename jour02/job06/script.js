const konamiCode = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown"];

let keysPress = [];

document.addEventListener("keydown", function (e) {
  keysPress.push(e.key);


  if (keysPress.join("") === konamiCode.join("")) {
    activerModeSecret();
  }
});

function activerModeSecret() {
    document.body.classList.add("konami-active");
    document.body.classList.add("laBase")
   
}
