<?php
// Database connection
$servername = "localhost";
$username = "root"; // Your MySQL username
$password = "1234"; // Your MySQL password
$dbname = "user_db"; // Your database name

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get data from POST request
$email = $_POST['email'];
$password = $_POST['password'];

// Query to check if the user exists
$sql = "SELECT * FROM users WHERE email = '$email'";
$result = $conn->query($sql);

// Check if the email exists
if ($result->num_rows > 0) {
    // Fetch user data
    $user = $result->fetch_assoc();

    // Verify password using password_verify
    if (password_verify($password, $user['password'])) {
        echo "Login successful"; // User is authenticated
    } else {
        echo "Invalid password"; // Password is incorrect
    }
} else {
    echo "No user found with that email"; // Email does not exist
}

// Close the database connection
$conn->close();
?>
