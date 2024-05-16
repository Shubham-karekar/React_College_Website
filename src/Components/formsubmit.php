<?php  

header('Access-Control-Allow-Origin: *');
$conn = new mysqli("localhost", "root", "", "projectdb");

if(mysqli_connect_error()){
    echo mysqli_connect_error();
    exit();
} else {
    $name = $_POST['name'] ?? '';
    $mobile = $_POST['mobile'] ?? '';
    $email = $_POST['email'] ?? '';
    $password = $_POST['password'] ?? '';

    // Hash the password
    $hashedPassword = password_hash($password, PASSWORD_DEFAULT);

    $stmt = $conn->prepare("INSERT INTO userdata (name, mobile, email, password) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $name, $mobile, $email, $hashedPassword); // Store the hashed password

    if($stmt->execute()){
        echo "Data is successfully submitted!";
    } else {
        echo "Error!";
    }

    $stmt->close();
    $conn->close();
}
?>