<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];
$formcontent = " FROM: $name \n\n EMAIL: $email \n\n MESSAGE: $message";
$recipient = "hey@danielstrong.io";
$subject = "Hello from a Portfolio Visitor";
$mailheader = "From: $email \r\n";
mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
?>