<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Document</title>
</head>
<body>

<?php 
error_reporting(E_ALL); 
ini_set('display_errors', '1'); 
if (mail("pixmaqwerty@mail.ru", "Test mail", "Проверка отправки почты")) { 
echo "ok"; 
} else { 
echo "ERROR";} 
?>

</body>
</html>