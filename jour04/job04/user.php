<?php
$host = 'localhost';
$user = 'root';
$pass = 'root';
$dbname = 'utilisateurs';

try {
    $dsn = "mysql:host=" . $host . ";dbname=" . $dbname;
    $pdo = new PDO($dsn, $user, $pass);
    $pdo->setAttribute(PDO::ATTR_DEFAULT_FETCH_MODE, PDO::FETCH_ASSOC);
} catch (PDOException $e) {


    echo json_encode(['error' => "pas de connexion à la base de donnees : " . $e->getMessage()]);
    exit;
}

$sql = "SELECT * FROM utilisateurs";
$stmt = $pdo->prepare($sql);
$stmt->execute();

$utilisateurs = $stmt->fetchAll();
echo json_encode($utilisateurs);
