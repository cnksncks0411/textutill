<?php
// header('Access-Control-Allow-Origin: *');
// header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
// header('Access-Control-Max-Age: 86400');
// header('Access-Control-Allow-Headers: x-requested-with');
$ip = $_SERVER['REMOTE_ADDR'];
$type = $_POST['replacement_type'];
$original = $_POST['original_text'];
$replacement = $_POST['replacement_text'];
$con = mysqli_connect("localhost","textutill","aqwsaqws1332!","textutill") or die ("Can't access DB");
$query = "insert into replacement_text (user_ip, original_text, replacement_text, replacement_type) values ('".$ip."','".$original."','".$replacement."','".$type."')";
$result = mysqli_query($con,$query);
echo($result);
?>
