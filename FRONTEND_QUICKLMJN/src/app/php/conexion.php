<?php
      $servidor ="localhost";
      $usuario = "root";
      $clave = "";
      $bd = "ohanaquicklmjn";

    $conexion = mysqli_connect($servidor,$usuario,$clave) or die('no encontro el servidor');
    mysqli_select_db($conexion, $bd) or die('no encontro la base de datos');
    mysqli_set_charset($conexion,"utf8");
    

