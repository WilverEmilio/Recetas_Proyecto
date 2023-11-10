<?php
?>
<?php
include_once "cors.php";
echo json_encode(Recetas\Recetas::buscar(urlencode($_GET["busqueda"])));
