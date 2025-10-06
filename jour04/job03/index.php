<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            margin: 20px;
        }

        label,
        select,
        input {
            margin: 5px;
        }

        #results {
            margin-top: 20px;
        }
    </style>

</head>

<body>
    <form id="formulaire">
        <label for="id">ID :</label>
        <input type="text" id="id" name="id">

        <label for="name">Nom :</label>
        <input type="text" id="name" name="name">

        <label for="type">Type :</label>
       <select id="type" name="type">
    <option value="">Tous</option>
    <option value="Grass">Grass</option>
    <option value="Poison">Poison</option>
    <option value="Fire">Fire</option>
    <option value="Flying">Flying</option>
    <option value="Water">Water</option>
    <option value="Bug">Bug</option>
    <option value="Normal">Normal</option>
    <option value="Electric">Electric</option>
    <option value="Ground">Ground</option>
    <option value="Fairy">Fairy</option>
    <option value="Fighting">Fighting</option>
    <option value="Psychic">Psychic</option>
    <option value="Rock">Rock</option>
    <option value="Steel">Steel</option>
    <option value="Ice">Ice</option>
    <option value="Ghost">Ghost</option>
    <option value="Dragon">Dragon</option>
</select>


        <input type="button" id="filtreBtn" value="Filtrer">
    </form>

    <div id="resultats"></div>
    <script src="script.js"></script>
</body>

</html>