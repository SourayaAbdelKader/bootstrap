<?php


include("connection.php");

$name = $_POST["full-name"];
$email = $_POST["email"];
$phone = $_POST["phone"];
$message = $_POST["message"]

$query = $mysqli->prepare("INSERT INTO messages(name, email, phone, message) VALUE (?, ?, ?, ?)");
$query->bind_param("ssss", $name, $email, $phone, $message);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);

?>