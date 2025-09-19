/*Si l'année est divisible par 4, passez à l'étape 2. Sinon, passez à l'étape 5.
Si l’année est divisible par 100, passez à l’étape 3. Sinon, passez à l’étape 4.
Si l’année est divisible par 400, passez à l’étape 4. Sinon, passez à l’étape 5.
L'année est bissextile (elle compte 366 jours).
L'année n'est pas bissextile (elle compte 365 jours)*/

function bisextile(annee) {
  if ((annee % 4 === 0 && annee % 100 !== 0) || annee % 400 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(bisextile(2020));
console.log(bisextile(1900));
console.log(bisextile(2000));
console.log(bisextile(2023));
