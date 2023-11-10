<?php
?>
<?php
include_once "cors.php";
echo json_encode(Recetas\Recetas::obtenerPorId($_GET["id"]));

