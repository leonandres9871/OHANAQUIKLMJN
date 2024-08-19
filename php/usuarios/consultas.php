<?php
 header('Access-Control-Allow-Origin: *');
 header("Access-Control-Allow-Headers: Origin, x-Requested-With, Content-Type, Aceept");

 require "../conexion.php";

 $con = "SELECT * from usuarios ORDER BY nombre";
 $res=mysqli_query($conexion,$con) or die('no consulto usuario');

 $vec=[];
 while ($reg=mysqli_fetch_array($res))
 {
    $vec[]=$reg;

 }
$cad=json_encode($vec);
echo $cad;
header('Content-Type: application/json');


