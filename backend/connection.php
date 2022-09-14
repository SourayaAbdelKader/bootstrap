<?php

$host = "localhost";
$db_user = "root";
$db_pass = "foobar";
$db_name = "messages";

$mysqli = new mysqli($host, $db_user, $db_pass, $db_name);

if(!$mysqli)
{
echo 'could not connect'.mysqli_error();
}


?>