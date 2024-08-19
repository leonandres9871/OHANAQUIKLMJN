<?php
 header('Access-control-allow-origin: *');
 header("Access-control-allow-headers: origin, x-requested-with, Content-type, Aceept");

 $json = file_get_contents('php://input');

 $params = json_decode($jason);

 require "../conexion.php";

 $ins = "insert info categoria(nombre,producto,categoria,cliente,valor venta,proveedor,marca,cod,valor compra,base de datos) values('$params->nombre','$params->productos' , '$params->categoria', '$params->cliente , '$params->valor_venta,'$params->proveedor,$params->marca,$params->cod,$params->valor_compra,$params->basededatos')";
 
 
 mysqli_query($conexion,$ins) or die('no inserto');


 class Result {}

 $response = new Result();
 $response->resultado = 'OK';
 $response->mensaje = 'datos grabados';

 header('Content-type: application/json');
 echo json_encode($response);