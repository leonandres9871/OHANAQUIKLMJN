<?php
    header('Access-control-allow-origin: *');
    header("Access-control-allow-headers: Origin, X-Requested-With, Content-type, Aceept");

    $user = $_GET["user"];
    $cla = $_GET['clave'];

    require "../conexion.php";

    $con = "SELECT * from usuarios WHERE usuario='$user' AND clave=sha1('$cla')";
    $res=mysqli_query($conexion,$con) or die('no consulto el usuario');


    $vec=[];
    while ($reg=mysqli_fetch_array($res))
    {
       $vec[]=$reg;
   
    }

switch ($vec) {
   case []:
      $vec[0] = ["validar" => "no  valida"];
      break;
   default:
      $vec[0]['validar'] = 'valida';
      break;
}
     
     $cad=json_encode($vec);
     echo $cad;
     header('content-type: application/json');




