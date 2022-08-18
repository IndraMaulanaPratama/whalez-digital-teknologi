<?php

function cari_char_unique($inputString) {

    for ($i = 0; $i <= strlen($inputString); $i++) {
     if (substr_count($inputString, substr($inputString, $i, 1)) == 1) {
        return substr($inputString, $i, 1);
     }
  }
}

echo cari_char_unique("the quick brown fox jumps then quickly blow air")."\n";
?>