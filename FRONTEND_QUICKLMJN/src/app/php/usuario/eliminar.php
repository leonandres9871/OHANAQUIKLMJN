<?php
 header('Access-control-allow-origin: *');
 header("Access-control-allow-headers: origin, x-requested-with, Content-type, Aceept");

 require("../conexion.php");


 $del = "DELETE FROM usuario WHERE id_usuario=" .$_GET['id'];
 mysqli_query($conexion,$del) or die("no elimino");

 class Result {}


 $response = new Result();
 $response->resultado = 'OK';
 $response->mensaje = 'usuario borrado';

 header('Content-type: application/json');
 echo json_encode($response);

 ?>