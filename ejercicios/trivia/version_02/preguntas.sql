-- phpMyAdmin SQL Dump
-- version 4.9.2
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 28-12-2019 a las 11:12:40
-- Versión del servidor: 10.4.10-MariaDB
-- Versión de PHP: 7.3.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `trivia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `preguntas`
--

DROP TABLE IF EXISTS `preguntas`;
CREATE TABLE IF NOT EXISTS `preguntas` (
  `id_pregunta` int(11) NOT NULL AUTO_INCREMENT,
  `id_tema` int(11) NOT NULL,
  `pregunta` text NOT NULL,
  `opciones` text CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `respuesta` text NOT NULL,
  PRIMARY KEY (`id_pregunta`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;

--
-- Volcado de datos para la tabla `preguntas`
--

INSERT INTO `preguntas` (`id_pregunta`, `id_tema`, `pregunta`, `opciones`, `respuesta`) VALUES
(1, 1, '¿Cuál es el apellido de la familia?', '[\"Walkman\",\"Williams\",\"Wilkerson\",\"Wololo\"]', 'Wilkerson'),
(2, 1, '¿Cuántas temporadas hubo?', '[\"6\",\"8\", \"4\",\"7\"]', '7'),
(3, 2, '¿Quién es el creador de Los Simpson?', '[\"OJ Simpson\",\"Seth MacFarlane\",\"Matt Groening\",\"Steven Spielberg\"]', 'Matt Groening'),
(4, 2, 'La cerveza preferida de Homer es de la marca…', '[\"Daff\",\"Duff\",\"Bud\",\"Stela\"]', 'Duff'),
(5, 2, '¿Qué significa la \'J\' de Homer J. Simpson?', '[\"John\",\"Julius\",\"Jay\",\"Jeanuts\"]', 'Jay');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
