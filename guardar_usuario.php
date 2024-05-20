<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "asp";

// Crear conexión
$conn = new mysqli($servername, $username, $password, $dbname);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Obtener los datos enviados por AJAX
$username = $_POST['nombre_usuario'];
$password = $_POST['contraseña'];

// Insertar los datos en la base de datos
$sql = "INSERT INTO usuarios (nombre_usuario, contraseña) VALUES ('$username', '$password')";
if ($conn->query($sql) === TRUE) {
    echo "Usuario registrado correctamente";
} else {
    echo "Error al registrar el usuario: " . $conn->error;
}

// Cerrar conexión
$conn->close();
?>
