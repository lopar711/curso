<?php
require('Config.php');

class Base extends Config{

    public static $Instancia = null;

    public static function crearPDO(){
        try{
            return  new PDO(parent::$host, parent::$user, parent::$pass, 
                            array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
                            PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8"));
        }catch(PDOException $e){
            die($e->getMessage());
        }
    }

    public static function getPDO(){
        if(self::$Instancia == null):
            self::$Instancia = self::crearPDO();
            return self::$Instancia;
        else:
            return self::$Instancia;
        endif;
        
    }


}

