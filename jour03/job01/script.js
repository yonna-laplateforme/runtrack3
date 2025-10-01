const phrase = document.querySelector(".phrase");

const btn1 = document.querySelector("#btn-1");
btn1.style.borderRadius = "150px";

const btn2 = document.querySelector("#btn-2");
btn2.style.borderRadius = "150px";

btn1.addEventListener("click", (e) => {
  phrase.style.visibility = "visible";
  phrase.style.textAlign = "center";
});

btn2.addEventListener("click", (e) => {
  phrase.style.visibility = "hidden";
});
