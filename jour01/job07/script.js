function jourtravaille(date) {
  const jour = date.getDate();
  const mois = date.getMonth();
  const annee = date.getFullYear();

  const joursFeriers = [
    new Date(2020, 0, 1),
    new Date(2020, 3, 13),
    new Date(2020, 4, 1),
    new Date(2020, 4, 8),
    new Date(2020, 4, 21),
    new Date(2020, 5, 1),
    new Date(2020, 6, 14),
    new Date(2020, 7, 15),
    new Date(2020, 10, 11),
    new Date(2020, 11, 25),
  ];

  const estFerie = joursFeriers.some(
    (jFeriers) =>
      jFeriers.getDate() === jour &&
      jFeriers.getMonth() === mois &&
      jFeriers.getFullYear() === annee
  );

  const moisNom = [
    "janvier",
    "février",
    "mars",
    "avril",
    "mai",
    "juin",
    "juillet",
    "août",
    "septembre",
    "octobre",
    "novembre",
    "décembre",
  ];

  if (estFerie) {
    console.log(`Le ${jour} ${moisNom[mois]} ${annee} est un jour férié.`);
  } else if (date.getDay() === 0 || date.getDay() === 6) {
    console.log(`Non, le ${jour} ${moisNom[mois]} ${annee} est un week-end.`);
  } else {
    console.log(
      `Oui, le ${jour} ${moisNom[mois]} ${annee} est un jour travaillé.`
    );
  }
}

jourtravaille(new Date(2020, 4, 1));
jourtravaille(new Date(2020, 0, 5));
jourtravaille(new Date(2020, 6, 23));
