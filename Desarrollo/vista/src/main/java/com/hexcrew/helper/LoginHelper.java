/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.hexcrew.helper;

import java.io.IOException;
import java.io.Serializable;
import javax.faces.context.FacesContext;
import com.hexcrew.entidad.Alumno;
import com.hexcrew.entidad.Usuario;
import com.hexcrew.integracion.ServiceFacadeLocator;

/**
 *
 * @author Kevin
 */
public class LoginHelper implements Serializable{
    

    /**
     * Metodo para hacer login llamara a la instancia de usuarioFacade
     * @param correo
     * @param password
     * @return 
     */
    public Usuario Login(String correo, String password){
        return ServiceFacadeLocator.getInstanceFacadeUsuario().login(password, correo);
    }
    
    
    
}
