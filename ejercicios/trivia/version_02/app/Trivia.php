<?php
require('Base.php');




function getTemas(){
$pdo = Base::getPDO();
$sql = "Select * from temas";
$consulta = $pdo->prepare($sql);
$consulta->execute();
return $consulta->fetchAll(PDO::FETCH_OBJ);

}

function getPreguntas($id_tema){
$pdo = Base::getPDO();
$sql = "Select pregunta, opciones, respuesta from preguntas where id_tema = ?";
$consulta = $pdo->prepare($sql);
$consulta->execute(array($id_tema));
return $consulta->fetchAll(PDO::FETCH_OBJ);

}

function crearTrivia(){
    $temas = getTemas();
    $trivia = [];
    foreach($temas as $tema):
        $trivia[$tema->nombre_tema] = [];
        $trivia[$tema->nombre_tema] = getPreguntas($tema->id_tema);
    endforeach;
    
    
    return $trivia;
}
$trivia = crearTrivia();
header('Content-Type: application/json');
echo(json_encode(array("preguntas"=>$trivia)));



