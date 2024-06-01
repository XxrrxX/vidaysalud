<?php
$nombre=$_POST['nombre'];
	if(strlen($nombre) < 1){
	echo"<h1>Nombre :</h1>";
	}
	if(strlen($nombre) > 1 ){
	echo"<h2>Nombre :</h2>";
	}
?>
