<?php

$nilai = [1, 3, 3, 3, 1, 5, 6, 7, 8, 1 ];

// https://www.w3schools.com/php/func_array_unique.asp
print_r( array_unique($nilai) );

// Output <3
// (
//     [0] => 1
//     [1] => 3
//     [5] => 5
//     [6] => 6
//     [7] => 7
//     [8] => 8
// )
?>