<?php
 header('Access-control-allow-origin: *');
 header("Access-control-allow-headers: origin, x-requested-with, Content-type, Aceept");

 $json = file_get_contents('php://input');

 $params = json_decode($jason);

 require("../conexion.php");

$editar = "UPDATE usuario SET nombre= '$params->nombre',usuario= '$params->usuario', clave=sha1('$params->clave'), 
identificacion='$params->identificacion , celulra='$params->celular , email='$params->email' WHERE id_usuario=$params->id_usuario";
 


 mysqli_query($conexion,$editar) or die('no inserto');


 class Result {}

 $response = new Result();
 $response->resultado = 'OK';
 $response->mensaje = 'datos grabados';

 header('Content-type: application/json');
 echo json_encode($response);