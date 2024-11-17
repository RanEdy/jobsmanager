CREATE DATABASE  IF NOT EXISTS `gestioneventos` /*!40100 DEFAULT CHARACTER SET utf8 */;
USE `gestioneventos`;
-- MySQL dump 10.13  Distrib 5.7.12, for Win64 (x86_64)
--
-- Host: localhost    Database: gestioneventos
-- ------------------------------------------------------
-- Server version	5.7.14-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contactosemergencia`
--

DROP TABLE IF EXISTS `contactosemergencia`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contactosemergencia` (
  `IDContacto` int(11) NOT NULL AUTO_INCREMENT,
  `IDUsuario` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Telefono` varchar(15) DEFAULT NULL,
  `Relacion` enum('Familiar','Amigo','Conocido') NOT NULL,
  PRIMARY KEY (`IDContacto`),
  KEY `IDUsuario` (`IDUsuario`),
  CONSTRAINT `contactosemergencia_ibfk_1` FOREIGN KEY (`IDUsuario`) REFERENCES `usuarios` (`IDUsuario`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contactosemergencia`
--

LOCK TABLES `contactosemergencia` WRITE;
/*!40000 ALTER TABLE `contactosemergencia` DISABLE KEYS */;
/*!40000 ALTER TABLE `contactosemergencia` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `direcciones`
--

DROP TABLE IF EXISTS `direcciones`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `direcciones` (
  `IDDireccion` int(11) NOT NULL AUTO_INCREMENT,
  `Estado` varchar(50) NOT NULL,
  `Ciudad` varchar(50) NOT NULL,
  `Calle` varchar(100) DEFAULT NULL,
  `NumeroCasa` varchar(10) DEFAULT NULL,
  `CodigoPostal` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`IDDireccion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `direcciones`
--

LOCK TABLES `direcciones` WRITE;
/*!40000 ALTER TABLE `direcciones` DISABLE KEYS */;
/*!40000 ALTER TABLE `direcciones` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `solicitudes`
--

DROP TABLE IF EXISTS `solicitudes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `solicitudes` (
  `IDSolicitud` int(11) NOT NULL AUTO_INCREMENT,
  `IDUsuario` int(11) NOT NULL,
  `IDTrabajo` int(11) NOT NULL,
  `Estado` enum('Pendiente','Aceptada','Rechazada') NOT NULL,
  PRIMARY KEY (`IDSolicitud`),
  KEY `IDUsuario` (`IDUsuario`),
  KEY `IDTrabajo` (`IDTrabajo`),
  CONSTRAINT `solicitudes_ibfk_1` FOREIGN KEY (`IDUsuario`) REFERENCES `usuarios` (`IDUsuario`),
  CONSTRAINT `solicitudes_ibfk_2` FOREIGN KEY (`IDTrabajo`) REFERENCES `trabajos` (`IDTrabajo`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solicitudes`
--

LOCK TABLES `solicitudes` WRITE;
/*!40000 ALTER TABLE `solicitudes` DISABLE KEYS */;
/*!40000 ALTER TABLE `solicitudes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trabajos`
--

DROP TABLE IF EXISTS `trabajos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trabajos` (
  `IDTrabajo` int(11) NOT NULL AUTO_INCREMENT,
  `NombreTrabajo` varchar(100) NOT NULL,
  `NombreLugar` varchar(100) NOT NULL,
  `Fecha` date NOT NULL,
  `Duracion` int(11) NOT NULL,
  `DireccionID` int(11) DEFAULT NULL,
  `MaxUsuarios` int(11) NOT NULL,
  PRIMARY KEY (`IDTrabajo`),
  KEY `DireccionID` (`DireccionID`),
  CONSTRAINT `trabajos_ibfk_1` FOREIGN KEY (`DireccionID`) REFERENCES `direcciones` (`IDDireccion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trabajos`
--

LOCK TABLES `trabajos` WRITE;
/*!40000 ALTER TABLE `trabajos` DISABLE KEYS */;
/*!40000 ALTER TABLE `trabajos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `IDUsuario` int(11) NOT NULL AUTO_INCREMENT,
  `Nombre` varchar(100) NOT NULL,
  `Contraseña` varchar(255) NOT NULL,
  `Correo` varchar(150) NOT NULL,
  `FechaNacimiento` date NOT NULL,
  `Telefono` varchar(15) DEFAULT NULL,
  `Antiguedad` int(11) DEFAULT NULL,
  `DireccionID` int(11) DEFAULT NULL,
  `TarjetaSeguridadActiva` tinyint(1) NOT NULL,
  `ImagenPerfil` longblob,
  `TipoUsuario` enum('Administrador','Supervisor','Empleado') NOT NULL,
  PRIMARY KEY (`IDUsuario`),
  UNIQUE KEY `Correo` (`Correo`),
  KEY `DireccionID` (`DireccionID`),
  CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`DireccionID`) REFERENCES `direcciones` (`IDDireccion`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-11-16 22:09:23
