<?php
$apellidos=$_POST['apellidos'];
	if(strlen($apellidos) < 1){
	echo"<h1>Apellidos :</h1>";
	}
	if(strlen($apellidos) > 1 ){
	echo"<h2>Apellidos :</h2>";
	}
?>
