<?php
  // _POST variable info we got from HTML
  $state = $_POST['state'];
  $city = $_POST['city'];

  if ($city == 'Dallas' && $state = 'Texas') {
    echo 'You are from the same town as John, lucky you! You still have to finish your final though.';
  } else {
    echo 'Dont ya\'ll wish you were Texans?';
  }
?>
