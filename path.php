<?php

if ($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["button"])) {
    
    $button = $_POST["button"];


$servername = "localhost";
$username = "root";
$password = "";
$dbname = "smart";
    
    $conn = new mysqli($servername, $username, $password, $dbname);

    
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

  
    $stmt = $conn->prepare("INSERT INTO Diagram (direction) VALUES (?)"); 


$stmt->bind_param("s", $button); // s for string


$stmt->execute();


$stmt->close();
$conn->close();
        }
        ?>
