<?php
 header('Access-control-allow-origin: *');
 header("Access-control-allow-headers: origin, x-requested-with, Content-type, Aceept");

 $json = file_get_contents('php://input');

 $params = json_decode($jason);

 require("../conexion.php");

 $editar = "UPDATE productos SET nombre= '$params->nombre',productos= '$params->productos' , categoria='$params->categoria', 
 cliente='$params->cliente , valor_venta='$params->valor_venta , proveedor='$params->proveedor , marca='$params->marca' , cod='$params->cod',
 valor_compra='$params->valor_compra' , basededatos='$params->basededatos',
 WHERE id_producto=$params->id_productos";


 
 
 mysqli_query($conexion,$editar) or die('no edito');


 class Result {}

 $response = new Result();
 $response->resultado = 'OK';
 $response->mensaje = 'datos modificados';

 header('Content-type: application/json');
 echo json_encode($response);