<?php
?>
<?php
include_once "vendor/autoload.php";

use Recetas\BD;

echo json_encode(BD::obtener()->query("SELECT * FROM a"));
