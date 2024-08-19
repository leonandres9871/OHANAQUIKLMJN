<?php
 header('Access-control-allow-origin: *');
 header("Access-control-allow-headers: origin, x-requested-with, Content-type, Aceept");

 $json = file_get_contents('php://input');

 $params = json_decode($jason);

 require "../conexion.php";

 $editar = "UPDATE categoria SET nombre= '$params->nombre',basededatos= '$params->basededatos' , servicios='$params->servicios', 
 productos='$params->productos , valor_venta='$params->valor_venta , proveedor='$params->proveedor , marca='$params->marca' , 
 valor_compra='$params->valor_compra' , 
 WHERE id_categoria=$params->id_categoria";


 
 
 mysqli_query($conexion,$editar) or die('no edito');


 class Result {}

 $response = new Result();
 $response->resultado = 'OK';
 $response->mensaje = 'datos modificados';

 header('Content-type: application/json');
 echo json_encode($response);