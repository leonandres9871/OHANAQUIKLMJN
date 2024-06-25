<?php
   class Base_de_datos{
       public $conexion;

       public function __construct($conexion) {
            $this->conexion = $conexion;

   }

   public function consulta(){
    $con = "SELECT b.*, c.nombre AS categoría , pr.nombre AS proveedor, m.nombre AS marca FROM basededatos b
     INNER JOIN categoria c ON  p.fo_categoria = c.id_categoria
     INNER JOIN proveedor pr ON p.fo_proveedor = pr.id_proveedor
     INNER JOIN marca m ON p.fo_marca = m.id_marca
     ORDER BY p.nombre";
      $res = mysqli_query($this->conexion, $con);
      $vec = [];

      while($row = mysqli_fetch_array($res)){
        $vec[] = $row;        
      }


      return $vec;

   }
   public function eliminar($id){
        $del = "DELETE FROM categoria WHERE id_categoria = $id";
        mysqli_query($this->conexion, $del);
        $vec = [];
        $vec['resultado'] = "ok";
        $vec['mensaje'] = "la categoria ha sido eliminada";
        return $vec;

   }
   
   public function insertar($params){
    $ins = "INSERT INTO categoria(nombre) VALUES('$params->nombre')";
    mysqli_query($this->conexion, $ins);
    $vec = [];
    $vec['resultado'] = "ok";
    $vec['mensaje'] = "la categoria ha sido guardada";
    return $vec; 
}  

public function editar($id, $params){
    $editar = "UPDATE categoria SET  nombre = '$params->nombre' WHERE id_categoria = $id";
    mysqli_query($this->conexion, $editar);
    $vec = [];
    $vec['resultado'] = "ok";
    $vec['mensaje'] = "la categoria ha sido editada";
    return $vec; 
}

public function filtro($valor){
    $filtro = "SELECT p.*, c.nombre AS categoría , pr.nombre AS proveedor, m.nombre AS marca FROM productos p
    INNER JOIN categoria c ON  p.fo_categoria = c.id_categoria
    INNER JOIN proveedor pr ON p.fo_proveedor = pr.id_proveedor
    INNER JOIN marca m ON p.fo_marca = m.id_marca
    ORDER BY p.nombre";
    $res = mysqli_query($this->conexion, $filtro);
    $vec = [];

    while($row = mysqli_fetch_array($res)){
        $vec[] = $row;
    }
        return $vec;
    }    

} 

 