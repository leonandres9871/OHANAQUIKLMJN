<?php
 header('Access-control-allow-origin: *');
 header("Access-control-allow-headers: origin, x-requested-with, Content-type, Aceept");

 $json = file_get_contents('php://input');

 $params = json_decode($jason);

 require("../conexion.php");

 $ins = "insert info usuario(nombre,usuario,clave,identificacion,email,celular) values('$params->nombre','$params->usuario' , sha1('$params->clave'), '$params->identificacion , '$params->celular,'$params->email')";
 
 
 mysqli_query($conexion,$ins) or die('no inserto');


 class Result {}

 $response = new Result();
 $response->resultado = 'OK';
 $response->mensaje = 'datos grabados';

 header('Content-type: application/json');
 echo json_encode($response);
