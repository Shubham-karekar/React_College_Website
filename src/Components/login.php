<?php
// Database configuration
$servername = "localhost";
$username = "root";
$password = "";
$database = "projectdb";

// Establish database connection
$conn = new mysqli($servername, $username, $password, $database);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Login logic
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    // Fetch user from database based on email
    $sql = "SELECT * FROM users WHERE email = '$email'";
    $result = $conn->query($sql);
    $sql = "SELECT * FROM users WHERE password = '$password'";
    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        $user = $result->fetch_assoc();
        // Verify password
        if (password_verify($password, $user["password"])) {
            // Password is correct, login successful
            echo json_encode($user);
        } else {
            // Password is incorrect
            http_response_code(401);
            echo json_encode(array("error" => "Invalid email or password"));
        }
    } else {
        // User not found
        http_response_code(401);
        echo json_encode(array("error" => "Invalid email or password"));
    }
}

// Close database connection
$conn->close();
?>
