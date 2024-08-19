<?php
 header('Access-control-allow-origin: *');
 header("Access-control-allow-headers: origin, x-requested-with, Content-type, Aceept");

 require "../conexion.php";

 $con = "SELECT * from categoria ORDER BY nombre";
 $res=mysqli_query($conexion,$con) or die('no consulto categoria');

 $vec=[];
 while ($reg=mysqli_fetch_array($res))
 {
    $vec[]=$reg;

 }
$cad=json_encode($vec);
echo $cad;
header('Content-type: application/json');
