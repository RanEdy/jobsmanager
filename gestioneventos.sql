-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Servidor: localhost
-- Tiempo de generación: 25-11-2024 a las 04:31:00
-- Versión del servidor: 8.0.17
-- Versión de PHP: 7.3.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `gestioneventos`
--

DELIMITER $$
--
-- Procedimientos
--
CREATE DEFINER=`root`@`localhost` PROCEDURE `ConsultarContactosEmergencia` ()  BEGIN
SELECT * FROM contactos_emergencia;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ConsultarContactosEmergenciaPorUsuario` (IN `p_id_usuario` INT(11))  BEGIN
    SELECT * FROM usuario_contactos
    INNER JOIN contactos_emergencia
    ON contactos_emergencia.IDContacto = usuario_contactos.IDContacto
	WHERE usuario_contactos.IDUsuario = p_id_usuario;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ConsultarSolicitudes` ()  BEGIN
SELECT * FROM solicitudes;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ConsultarSolicitudesPorTrabajo` (IN `p_id_trabajo` INT(11))  BEGIN
    SELECT * FROM solicitudes
    INNER JOIN trabajos
    ON solicitudes.IDTrabajo = p_id_trabajo;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ConsultarSolicitudesPorUsuario` (IN `p_id_usuario` INT(11))  BEGIN
    SELECT * FROM solicitudes
    INNER JOIN usuarios
    ON solicitudes.IDUsuario = p_id_usuario;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ConsultarTrabajos` ()  BEGIN
SELECT * FROM trabajos;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ConsultarTrabajosPorUsuario` (IN `p_id_usuario` INT(11))  BEGIN
    SELECT * FROM usuarios_trabajos
    INNER JOIN trabajos
    ON usuarios_trabajos.IDTrabajo = trabajos.IDTrabajo
	WHERE usuarios_trabajos.IDUsuario = p_id_usuario;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ConsultarUsuarios` ()  BEGIN
SELECT * FROM usuarios;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ConsultarUsuariosNoPassword` ()  BEGIN
	SELECT IDUsuario, Nombre, Correo, FechaNacimiento, Telefono, FechaContratacion, TarjetaSeguridadActiva, ImagenPerfil, TipoUsuario, Calle, Ciudad, Estado, CodigoPostal, NumeroCasa
    FROM usuarios;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ConsultarUsuariosPorTrabajo` (IN `p_id_trabajo` INT(11))  BEGIN
    SELECT * FROM usuarios_trabajos
    INNER JOIN usuarios
    ON usuarios_trabajos.IDUsuario = usuarios.IDUsuario
	WHERE usuarios_trabajos.IDTrabajo = p_id_trabajo;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ContarUsuariosPorTrabajo` (IN `p_id_trabajo` INT(11))  BEGIN
	SELECT COUNT(IDUsuario) FROM usuarios_trabajos
    WHERE usuarios_trabajos.IDTrabajo = p_id_trabajo;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `EditarSolicitud` (IN `p_estado` ENUM('REJECTED','PENDING','ACCEPTED',''), IN `p_id_trabajo` INT(11), IN `p_id_usuario` INT(11))  BEGIN
	UPDATE solicitudes
    SET estado = p_estado
    WHERE solicitudes.IDUsuario = p_id_usuario
    AND solicitudes.IDTrabajo = p_id_trabajo;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `EditarUsuario` (IN `p_id` INT(11), IN `p_nombre` VARCHAR(100), IN `p_password` VARCHAR(255), IN `p_correo` VARCHAR(150), IN `p_nacimiento` DATE, IN `p_telefono` VARCHAR(15), IN `p_contratacion` DATE, IN `p_tarjeta` TINYINT(1) UNSIGNED, IN `p_imagen` MEDIUMBLOB, IN `p_tipo` ENUM('ADMIN','SUPERVISOR','WORKER',''), IN `p_calle` VARCHAR(100), IN `p_ciudad` VARCHAR(100), IN `p_estado` VARCHAR(100), IN `p_postal` VARCHAR(50), IN `p_numCasa` VARCHAR(50))  BEGIN
	UPDATE usuarios
    SET Nombre = p_nombre,
    	Contraseña = p_password,
        Correo = p_correo,
        FechaNacimiento = p_nacimiento,
        Telefono = p_telefono,
        FechaContratacion = p_contratacion,
        TarjetaSeguridadActiva = p_tarjeta,
        ImagenPerfil = p_imagen,
        TipoUsuario = p_tipo,
        Calle = p_calle,
        Ciudad = p_ciudad,
        Estado = p_estado,
        CodigoPostal = p_postal,
        NumeroCasa = p_numCasa
    WHERE usuarios.IDUsuario = p_id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ObtenerTrabajoPorID` (IN `p_id` INT(11))  BEGIN
SELECT * FROM trabajos
WHERE trabajos.IDTrabajo = p_id;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ObtenerUsuarioLogin` (IN `p_email` VARCHAR(100), IN `p_password` VARCHAR(255))  BEGIN
SELECT * FROM usuarios
WHERE usuarios.Correo = p_email
AND usuarios.Contraseña = p_password;
END$$

CREATE DEFINER=`root`@`localhost` PROCEDURE `ObtenerUsuarioPorID` (IN `p_id` INT(11))  BEGIN
SELECT * FROM usuarios
WHERE usuarios.IDUsuario = p_id;
END$$

DELIMITER ;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `contactos_emergencia`
--

CREATE TABLE `contactos_emergencia` (
  `IDContacto` int(11) NOT NULL,
  `IDUsuario` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Telefono` varchar(15) DEFAULT NULL,
  `Relacion` enum('Familiar','Amigo','Conocido') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `solicitudes`
--

CREATE TABLE `solicitudes` (
  `IDSolicitud` int(11) NOT NULL,
  `IDUsuario` int(11) NOT NULL,
  `IDTrabajo` int(11) NOT NULL,
  `Estado` enum('REJECTED','PENDING','ACCEPTED') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `trabajos`
--

CREATE TABLE `trabajos` (
  `IDTrabajo` int(11) NOT NULL,
  `NombreTrabajo` varchar(100) NOT NULL,
  `NombreLugar` varchar(100) NOT NULL,
  `Fecha` date NOT NULL,
  `Duracion` int(11) NOT NULL,
  `MaxUsuarios` int(11) NOT NULL,
  `Calle` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Ciudad` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Estado` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `CodigoPostal` varchar(50) NOT NULL,
  `NumeroCasa` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `IDUsuario` int(11) NOT NULL,
  `Nombre` varchar(100) NOT NULL,
  `Contraseña` varchar(255) NOT NULL,
  `Correo` varchar(150) NOT NULL,
  `FechaNacimiento` date NOT NULL,
  `Telefono` varchar(15) DEFAULT NULL,
  `FechaContratacion` date NOT NULL,
  `TarjetaSeguridadActiva` tinyint(1) NOT NULL,
  `ImagenPerfil` mediumblob,
  `TipoUsuario` enum('ADMIN','SUPERVISOR','WORKER') CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `Calle` varchar(100) NOT NULL,
  `Ciudad` varchar(100) NOT NULL,
  `Estado` varchar(100) NOT NULL,
  `CodigoPostal` varchar(50) NOT NULL,
  `NumeroCasa` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios_trabajos`
--

CREATE TABLE `usuarios_trabajos` (
  `IDUsuario` int(11) NOT NULL,
  `IDTrabajo` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `contactos_emergencia`
--
ALTER TABLE `contactos_emergencia`
  ADD PRIMARY KEY (`IDContacto`),
  ADD KEY `IDUsuario` (`IDUsuario`);

--
-- Indices de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD PRIMARY KEY (`IDSolicitud`),
  ADD KEY `IDUsuario` (`IDUsuario`),
  ADD KEY `IDTrabajo` (`IDTrabajo`);

--
-- Indices de la tabla `trabajos`
--
ALTER TABLE `trabajos`
  ADD PRIMARY KEY (`IDTrabajo`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`IDUsuario`);

--
-- Indices de la tabla `usuarios_trabajos`
--
ALTER TABLE `usuarios_trabajos`
  ADD PRIMARY KEY (`IDUsuario`,`IDTrabajo`),
  ADD KEY `IDUsuario` (`IDUsuario`,`IDTrabajo`),
  ADD KEY `id_trabajo_foranea` (`IDTrabajo`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `contactos_emergencia`
--
ALTER TABLE `contactos_emergencia`
  MODIFY `IDContacto` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  MODIFY `IDSolicitud` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `trabajos`
--
ALTER TABLE `trabajos`
  MODIFY `IDTrabajo` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `IDUsuario` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `contactos_emergencia`
--
ALTER TABLE `contactos_emergencia`
  ADD CONSTRAINT `id_usuario_contacto` FOREIGN KEY (`IDUsuario`) REFERENCES `usuarios` (`IDUsuario`) ON DELETE RESTRICT ON UPDATE RESTRICT;

--
-- Filtros para la tabla `solicitudes`
--
ALTER TABLE `solicitudes`
  ADD CONSTRAINT `solicitudes_ibfk_1` FOREIGN KEY (`IDUsuario`) REFERENCES `usuarios` (`IDUsuario`),
  ADD CONSTRAINT `solicitudes_ibfk_2` FOREIGN KEY (`IDTrabajo`) REFERENCES `trabajos` (`IDTrabajo`);

--
-- Filtros para la tabla `usuarios_trabajos`
--
ALTER TABLE `usuarios_trabajos`
  ADD CONSTRAINT `id_trabajo_foranea` FOREIGN KEY (`IDTrabajo`) REFERENCES `trabajos` (`IDTrabajo`) ON DELETE RESTRICT ON UPDATE RESTRICT,
  ADD CONSTRAINT `id_usuario_foranea` FOREIGN KEY (`IDUsuario`) REFERENCES `usuarios` (`IDUsuario`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
