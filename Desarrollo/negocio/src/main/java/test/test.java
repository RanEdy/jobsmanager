/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package test;

import com.hexcrew.entidad.Usuario;
import com.hexcrew.integracion.ServiceFacadeLocator;

/**
 *
 * @author lukki
 */
public class test {
    public static void main(String[] args) {
        Usuario usuario = new Usuario();
        
        usuario = ServiceFacadeLocator.getInstanceFacadeUsuario().login("1234","erandi@gmail.com");
        
        if(usuario.getIdusuario() != null){
            System.out.println("Login exitoso con el correo: " + usuario.getCorreo());
        }else{
            System.out.println("No se encontro registro");
        }
    }
}
