// Ejercicio 1
alert("Primer programa en JavaScript");

/* Ejercicio 2
Profe quise agregar cada una de las situaciones posibles en las cuales el formulario no fuera válido
*/

window.onsubmit = function autenticar(){
    
    var usuario = document.formulario.nombre;
    var pass = document.formulario.pass;
    var correo = document.formulario.correo; 

    var usurio_vacio = esta_vacio(usuario);
    var pass_vacio = esta_vacio(pass);
    var correo_vacio = esta_vacio(correo);
    
    if(usurio_vacio && pass_vacio  && correo_vacio)
    {
        usuario.style.borderColor = 'red';
        pass.style.borderColor = 'red';
        correo.style.borderColor = 'red';
        alert("Los campos estan vacios");
        return false;
    }
    else if((usurio_vacio && pass_vacio) || (usurio_vacio && correo_vacio) || (pass_vacio && correo_vacio) )
    {
        var alert_vacios= [];
        var i = 0;
        if(usurio_vacio){        
            alert_vacios [i] = "usuario ";
            usuario.style.borderColor = 'red';
            i++;
        }
        if(pass_vacio){        
            alert_vacios [i] = "password ";  
            pass.style.borderColor = 'red';
            i++;      
        }
        if(correo_vacio){             
            alert_vacios [i] = "correo ";
            correo.style.borderColor = 'red';
            i++;
        }
        alert("Los campos " + alert_vacios + " no pueden estar vacios");
        return false;
    }
    else if(usurio_vacio || pass_vacio || correo_vacio){
        if(usurio_vacio){   
            usuario.style.borderColor = 'red';
            alert("El campo usuario no puede estar vacio");
            return false;
        }
        else if(pass_vacio){        
            pass.style.borderColor = 'red';
            alert("El campo password no puede estar vacio");
            return false;      
        }
        else if(correo_vacio){             
            correo.style.borderColor = 'red';
            alert("El campo correo no puede estar vacio");
            return false;
        }        
        
    }
    else {
        alert("Formulario válido");
    }
}

 function esta_vacio(valor){
    var vacio = false;
    var exp_no_espacio = /^\s+$/;
    if (!valor.value || valor.value.length == 0 || exp_no_espacio.test(valor.value) )
    {
        return true;
    }
    return vacio;
}
// Concluye Ejercicio 2