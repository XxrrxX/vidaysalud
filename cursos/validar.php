<?php
	$nombre=$_POST['nombre'];
        $apellidos=$_POST['apellidos'];
        $telefono=$_POST['telefono'];
        $correo=$_POST['correo'];

if(strlen($nombre) < 1 or strlen($apellidos) < 1 or strlen($telefono) < 1 or strlen($correo) < 1){
echo'<div calss="bad">';
echo'<p>Favor de completar todos los campos</p>';
echo'</div>';
}
if(strlen($nombre) > 1 && strlen($apellidos) > 1 && strlen($telefono) > 1 && strlen($correo) > 1){
echo'<div class="ok">';
echo'<p class="ok">Preregistro completado</p>';
echo'</div>';
include("registrar.php");
}
?>
