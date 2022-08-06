<?php
$correo=$_POST['correo'];
	if(strlen($correo) < 1){
	echo"<h1>Correo :</h1>";
	}
	if(strlen($correo) > 1 ){
	echo"<h2>Correo: :</h2>";
	}
?>
