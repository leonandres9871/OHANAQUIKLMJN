<?php
 header('Access-control-allow-origin: *');
 header("Access-control-allow-headers: origin, x-requested-with, Content-type, Aceept");

 require "../conexion.php";


 $del = "DELETE FROM clientes WHERE id_clientes=" .$_GET['id'];
 mysqli_query($conexion,$del) or die("no elimino");

 class Result {}


 $response = new Result();
 $response->resultado = 'OK';
 $response->mensaje = 'cliente  borrado';

 header('Content-type: application/json');
 echo json_encode($response);