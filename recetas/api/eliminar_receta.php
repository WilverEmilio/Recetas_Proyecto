<?php
?>
<?php
include_once "cors.php";
$idReceta = json_decode(file_get_contents("php://input"));
echo json_encode(Receta\Recetas::eliminar($idReceta));
