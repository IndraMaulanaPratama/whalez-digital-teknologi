<?php

$nilai = 137;
$hasil = 'true';

for ($i = 2; $i < $nilai; $i++)
{
    if ($nilai % $i == 0)
        $hasil = 'false';
}

echo $hasil;

?>