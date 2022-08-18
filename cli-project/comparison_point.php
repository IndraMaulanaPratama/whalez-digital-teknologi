<?php

$operator = ['>', '=', '<'];
$data_a = [5, 6, 7];
$data_b = [3, 6, 10];
$hasil = [];


for ($i=0; $i < 3; $i++) {

    if ($i == 0) {
        $proses = $data_a[$i]  >  $data_b[$i];
    
    } elseif ($i == 1) {
        $proses = $data_a[$i]  ==  $data_b[$i];

    } else {
        $proses = $data_a[$i]  <  $data_b[$i];

    }

    echo $proses;
}

?>