<?php
$host = 'localhost';
$user = 'root';
$password = '';
$database = 'asp';

$conexionbd = new mysqli($host, $user, $password, $database);

if ($conexionbd->connect_error) {
    die("Error de conexión a la base de datos: " . $conexionbd->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre_usuario = $_POST['nombre_usuario'];
    $contraseña = $_POST['contraseña'];

    $query = "INSERT INTO usuarios (nombre_usuario, contraseña) VALUES ('$nombre_usuario', '$contraseña')";

    if ($conexionbd->query($query) === TRUE) {
        echo "Usuario registrado correctamente";
    } else {
        echo "Error al guardar el usuario: " . $conexionbd->error;
    }
}

$conexionbd->close();
?>
