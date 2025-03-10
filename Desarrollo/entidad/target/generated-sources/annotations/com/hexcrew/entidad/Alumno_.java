package com.hexcrew.entidad;

import com.hexcrew.entidad.Usuario;
import javax.annotation.Generated;
import javax.persistence.metamodel.ListAttribute;
import javax.persistence.metamodel.SingularAttribute;
import javax.persistence.metamodel.StaticMetamodel;

@Generated(value="EclipseLink-2.5.2.v20140319-rNA", date="2025-03-10T12:19:27")
@StaticMetamodel(Alumno.class)
public class Alumno_ { 

    public static volatile SingularAttribute<Alumno, String> apellidos;
    public static volatile ListAttribute<Alumno, Usuario> usuarioList;
    public static volatile SingularAttribute<Alumno, Integer> idalumno;
    public static volatile SingularAttribute<Alumno, Integer> matricula;
    public static volatile SingularAttribute<Alumno, String> nombre;

}