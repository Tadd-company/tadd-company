<?php
$pol=mysqli_connect("localhost","root","","tadd") or die ('Brak poloczenia z serwerem MySQL');
$fullname=$_POST['fullname'];
$email=$_POST['email'];
$phonenumber=$_POST['phonenumber'];
$services=$_POST['services'];
$message=$_POST['message'];
$dodaj_dane=mysqli_query($pol, "INSERT INTO dane (fullname,email,phonenumber,services,message) value ('$fullname','$email','$phonenumber','$services','$message')");
header("Location: tadd.html");
exit
?>