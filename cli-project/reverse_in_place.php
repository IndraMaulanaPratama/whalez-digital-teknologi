<?php

$string = "Hello World";
$array = explode(" ", $string);
 
for ($i=0; $i < count($array) ; $i++) { 
    # code...
    printf( strrev($array[$i]) . ' ' );
}

?>