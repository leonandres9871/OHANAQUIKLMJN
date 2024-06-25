<?php
     header('Access-Control-Allow-Origin: *');
     header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

     require_once("../conexion.php");
     require_once("../modelos/categoria.php");

     $control = $_GET['control'];

     $cate = new Categoria($conexion);

     switch ($control) {
        case 'consulta':
            $vec= $cate->consulta();
            break;

        }        

        $datosj = json_encode($vec);
        echo $datosj;
        header('Content-Type: application/json');



?>