<?php
$username = $_POST['username'];
$password = $_POST['password'];
$repass = $_POST['repass'];
$email = $_POST['email'];

if (!empty($username) || !empty($password) || !empty($email) || !empty($repass)) {
    $host = "localhost";
    $dbUsername = "root";
    $dbPassword = "";
    $dbname = "artgallery";

    $conn = new mysqli($host, $dbUsername, $dbPassword, $dbname);
    if (mysqli_connect_error()) {
        die('Connect Error('. mysqli_connect_error(). ')'. mysqli_connect_error());
    } else {
        $SELECT = "SELECT email From register Where email = ? Limit 1";
        $SELECT = "SELECT username From register Where username = ? Limit 1";
        $INSERT = "INSERT Into register (username, password, email, repass) values(?,?,?,?)";
$stmt = $conn->prepare($SELECT);
$stmt->bind_param("s", $email);
$stmt->execute();
$stmt->bind_result($email);
$stmt->store_result();
$rnum = $stmt->num_rows;

if ($rnum==0) {
    $stmt->close();

    $stmt = $conn->prepare($INSERT);
    $stmt->bind_param("ssss", $username, $password, $email, $repass);
    $stmt->execute();
    echo "New record inserted sucessfully!";
} else {
    echo "This email is already in use!";
}
$stmt->close();
$conn->close();
    }
} else {
    echo "All fields are required!";
    die();
}
?>