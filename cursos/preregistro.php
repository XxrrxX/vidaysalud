<html>
<head>
<meta charset="utf-8">
<link rel="stylesheet" href="../css/registro.css">
<title>Preregistro</title>
<link rel="shortcut icon" type="image/x-icon" href="../img/ico/voavi.ico">
</head>
<body>
	<header>
	<img id="logo" src="../img/ico/voavi.jpg" height="200px"> 
	<div id="mnu">
	<ul>
	<li><a href="../index.html">Inicio</a></li>
	</div>

	</header>
	<section class="from-register">
	<h4>Preregistro</h4>
	<form method="POST" action=""> 
	<?php
	include("validar_n.php");
	?>
	<input class="controls" type="text" name="nombre"  id="nombre">
	<?php
	include("validar_a.php");
	?>
	<input class="controls" type="text" name="apellidos" id="apellidos">
	<?php
	include("validar_t.php");
	?>
	<input class="controls" type="text" name="telefono" id="telefono">
	<?php
	include("validar_c.php");
	?>
	<input class="controls" type="email" name="correo" id="correo">
	<select name="cbocursos">
	<option value="Enfermeria">Enfermeria</option>
	<option value="Asistente educativo">Asistente educativo</option>
	<option value="Tecnico veterinario">Tecnico Veterinario</option>
	<option value="Quiropractico">Quitopractico</option>
	<option value="Acupuntura y auriculoterapia">Acuputntura y Auriculo terapia</option>
	<option value="Medicina alternativa">Medicina Alternativa</option>
	<option value="Podologia">Podologia</option>
	<option value="Fisioterapia y rehabilitacion">Fisioterapia y Rehabilitacion</option>
	<option value="Cuidados geriatricos">Cuidados geriatricos</option>
	<option value="Paramedico">Paramedico</option>
	<option value="Alta peluqueria con Barberia">Alta peluqueria con barberia</option>
	<option value="Aplicacion de uñas">Aplicacion de uñas</option>
	</select>
	<p>Al apuntarse acepta los <a href="">Terminos y Condiciones</a></p>
	<input class="boton" value="Apuntarse"type="submit" name"apuntar"> 
	<?php
	include ("validar.php");
	?>
	</from>
	</section>

</body>
</html>

