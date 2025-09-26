const textarea = document.getElementById("keylogger");

document.addEventListener("keydown", function (evenement) {
  const key = evenement.key;

  if (!/^[a-zA-Z]$/.test(key)) return;

  if (document.activeElement === textarea) {
    setTimeout(() => {
      textarea.value += key;
    }, 0);
  } else {
    evenement.preventDefault();
    textarea.value += key;
  }
});
