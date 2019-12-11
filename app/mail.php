<?php

$recepient = "denby@yandex.by";
$sitename = "IOS Boss";

$info = trim($_POST["info"]);
$message = "Телефон или Email: $info";

$pagetitle = "Новая заявка с сайта \"$sitename\"";

mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");