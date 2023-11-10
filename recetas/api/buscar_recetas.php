<?php
?>
<?php
include_once "cors.php";
echo json_encode(Receta\Recetas::buscar(urlencode($_GET["busqueda"])));
