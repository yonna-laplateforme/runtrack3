function estPremier(nombre) {
  if (nombre <= 1) return false;
  if (nombre === 2) return true;
  if (nombre % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(nombre); i += 2) {
    if (nombre % i === 0) return false;
  }

  return true;
}

function sommenombrespremiers(a, b) {
  if (estPremier(a) && estPremier(b)) {
    return a + b;
  } else {
    return false;
  }
}

// Exemples d'utilisation :
console.log(sommenombrespremiers(3, 5));
console.log(sommenombrespremiers(4, 5));
console.log(sommenombrespremiers(10, 6));
console.log(sommenombrespremiers(7, 11));
