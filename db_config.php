<?php
// Database credentials
$host = "localhost";
$username = "root"; // Default username for XAMPP MySQL is 'root'
$password = "1234"; // Default password is empty for XAMPP MySQL
$database = "user_db"; // Your database name

// Create a connection
$conn = new mysqli($host, $username, $password, $database);

// Check the connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
?>
