function tableUtilisateur() {
  fetch("user.php")
    .then(response => response.json())
    .then(data => {
      const tbody = document.querySelector("#utilisateurs tbody");
      tbody.innerHTML = "";  

      data.forEach(utilisateur => {
        const row = document.createElement("tr");

        row.innerHTML = `
          <td>${utilisateur.id}</td>
          <td>${utilisateur.nom}</td>
          <td>${utilisateur.prenom}</td>
          <td>${utilisateur.email}</td>
        `;

        tbody.appendChild(row);
      });
    });
}

