<?php

    if(isset($_POST)) {
        $db = new mysqli('localhost','root','','personal_site');
        $stmt = $db->prepare("INSERT INTO Contact (Name, Email, Message) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $name, $email, $message);
        var_dump($_POST);
        $name = $_POST['name'];
        $email = $_POST['email'];
        $message = $_POST['message'];
        $stmt->execute();
        $stmt->close();
        $db->close();
    }