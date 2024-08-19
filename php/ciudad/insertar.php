<?php
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Headers: Origin, x-requested-with, Content-Type, Aceept");

 $json = file_get_contents('php://input');

 $params = json_decode($json);

 require("../conexion.php");

 

 $ins = "insert into ciudad(nombre,departamento) values('$params->nombre','$params->departamento')";
 
 
 mysqli_query($conexion, $ins) or die('no inserto');


 class Result {}

 $response = new Result();

 $response->resultado = 'OK';
 $response->mensaje = 'datos grabados';

 header('Content-Type: application/json');
 echo json_encode($response);