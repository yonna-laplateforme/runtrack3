function tri(numbers, order) {
  //Si l'ordre est croissant
  if (order === "asc") {
    //retourne la comparaison a - b de sorte que si a est plus petit que b il vient avant si a est plus grand il passe apres et si a est egale a b alors on ne change pas de place
    return numbers.sort((a, b) => a - b);
    //
  } else if (order === "desc") {
    //retourne la comparaison b - a de sorte que si b est plus petit que a il vient avant si a est plus grand il passe apres et si a est egale a b alors on ne change pas de place
    return numbers.sort((a, b) => b - a);
  }
}
console.log(tri([5, 2, 9, 1, 3, 10], "asc"));
console.log(tri([5, 2, 9, 10, 3, 1], "desc"));
