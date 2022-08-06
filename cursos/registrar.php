<?php
	include("conexion.php");
	$nombre=$_POST['nombre'];
        $apellidos=$_POST['apellidos'];
        $telefono=$_POST['telefono'];
        $correo=$_POST['correo'];
	$curso=$_POST['cbocursos'];
	$consulta="INSERT INTO registrados (nombre,apellidos,telefono,correo,curso) VALUES ('$nombre','$apellidos','$telefono','$correo','$curso')";
	$res= mysqli_query($con,$consulta);
	mysqli_close($con);
?>
