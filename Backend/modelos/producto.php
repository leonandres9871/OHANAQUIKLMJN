<?php
   class productos{
       public $conexion;

       public function __construct($conexion) {
            $this->conexion = $conexion;

   }

   public function consulta(){
     $con = "SELECT p.*, c.nombre AS categoría , pr.nombre AS proveedor, m.nombre AS marca FROM productos p
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
        $del = "DELETE FROM productos WHERE id_productos = $id";
        mysqli_query($this->conexion, $del);
        $vec = [];
        $vec['resultado'] = "ok";
        $vec['mensaje'] = "el producto a sido eliminado";
        return $vec;

   }
   
   public function insertar($params){
    $ins = "INSERT INTO productos(codigo,nombre,fo_categoria,precio_compra,precio_venta,fo_marca,inventario,fo_proveedor)
            VALUES('$params->codigo', '$params->nombre', $params->fo_categoria, $params->precio_compra, $params->precio_venta, $params->fo_marca, $params->inventario, $params->fo_proveedor)";
    mysqli_query($this->conexion, $ins);
    $vec = [];
    $vec['resultado'] = "ok";
    $vec['mensaje'] = "el producto ha sido guardado";
    return $vec; 
}  

public function editar($id, $params){
    $editar = "UPDATE productos SET  codigo = '$params->codigo', nombre = '$params->nombre', fo_categoria = $params-> fo_categoria, precio_compra = $params->precio_compra, precio_venta = $params->precio_venta, fo_marca = $params->fo_marca, inventario = $params->inventario, fo_proveedor = $params->proveedor WHERE id_productos = $id";
    mysqli_query($this->conexion, $editar);
    $vec = [];
    $vec['resultado'] = "ok";
    $vec['mensaje'] = "el producto ha sido editada";
    return $vec; 
}

public function filtro($valor){
 $filtro = "SELECT p.*, c.nombre AS categoría , pr.nombre AS proveedor, m.nombre AS marca FROM productos p
 INNER JOIN categoria c ON  p.fo_categoria = c.id_categoria
 INNER JOIN proveedor pr ON p.fo_proveedor = pr.id_proveedor
 INNER JOIN marca m ON p.fo_marca = m.id_marca
    WHERE p.codigo LIKE '%$valor%' OR .p.nombre LIKE '%$valor%' OR categoria LIKE '%$valor%' OR marca LIKE '%$valor%' OR  proveedor LIKE '%$valor%' ";
    
$res = mysqli_query($this->conexion, $filtro);
$vec = [];

while($row = mysqli_fetch_array($res)){
        $vec[] = $row;
    }
        return $vec;
    }    

} 

 
?>