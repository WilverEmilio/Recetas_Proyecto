<?php
?>
<?php
include_once "cors.php";
$receta = json_decode($_POST["receta"]);
$foto = $_FILES["foto"];
$respuesta = Receta\Recetas::agregar($receta->nombre, $receta->descripcion, $receta->porciones, $receta->ingredientes, $receta->pasos, $foto);
echo json_encode($respuesta);
