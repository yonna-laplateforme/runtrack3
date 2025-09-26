function showhide() {
  const articleId = "phrase";
  const existingArticle = document.getElementById(articleId);

  if (existingArticle) {
    // L'article existe on le retire
    existingArticle.remove();
  } else {
    // L'article n'existe pas on le creer
    const article = document.createElement("article");
    article.id = articleId;
    article.textContent =
      "L'important n'est pas la chute, mais l'atterrissage.";
    document.body.appendChild(article);
  }
}

// On attache l'événement click au bouton
const button = document.getElementById("button");
button.addEventListener("click", showhide);
