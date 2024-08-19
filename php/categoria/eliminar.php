<?php
 header('Access-control-allow-origin: *');
 header("Access-control-allow-headers: origin, x-requested-with, Content-type, Aceept");

 require "../conexion.php";


 $del = "DELETE FROM categoria WHERE id_categoria=" .$_GET['id'];
 mysqli_query($conexion,$del) or die("no elimino");

 class Result {}


 $response = new Result();
 $response->resultado = 'OK';
 $response->mensaje = 'categoria borrada';

 header('Content-type: application/json');
 echo json_encode($response);