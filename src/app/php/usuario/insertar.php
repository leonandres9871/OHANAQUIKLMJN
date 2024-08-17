<?php
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Headers: Origin, x-requested-with, Content-Type, Aceept");

 //$json = file_get_contents('php://input');

 //$params = json_decode($json);

 require("../conexion.php");

 $ins = "insert into usuario(nombre, usuario, clave, tipo) values ('juan', 'juan@mail.com', sha1('123456'),'general')";

 //$ins = "insert into usuario(nombre,usuario,clave,identificacion,email,celular,tipo) values('$params->nombre','$params->usuario' , sha1('$params->clave'), '$params->identificacion , '$params->celular,'$params->email','$params->tipo')";
 
 
 mysqli_query($conexion, $ins) or die('no inserto');


 class Result {}

 $response = new Result();

 $response->resultado = 'OK';
 $response->mensaje = 'datos grabados';

 header('Content-Type: application/json');
 echo json_encode($response);
