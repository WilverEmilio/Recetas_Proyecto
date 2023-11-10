<?php
?>
<?php
include_once "cors.php";
echo json_encode(Receta\Recetas::obtenerPorId($_GET["id"]));

