<?php
$request =$_SERVER['REQUEST_URI'];
$method = $_SERVER['REQUEST_METHOD'];
if($method == 'POST'){
    switch ($request){
        case '/player';
            require __DIR__.'/includes/test.php';
            break;
    }
}else{
    switch ($request){
        case '/';
            require __DIR__.'/includes/home.php';
            break;
    }
}
?>

