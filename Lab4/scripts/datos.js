
window.onsubmit = function salvarDatos(){
    
    var nombre = document.formulario.nombre;
    var apellidos = document.formulario.apellidos;
    var genero = document.formulario.genero;  
    var foto = document.formulario.foto;  


//variables auxiliares
    var campos_vacios = ["Error\n"];
    var nombre_vacio = esta_vacio(nombre);
    var apellidos_vacio = esta_vacio(apellidos);


//nombre
    if(nombre_vacio) 
    {
        if(nombre_vacio) campos_vacios.push("Falta el Nombre\n");  
        
    } else {
        if(!empesar_con_mayuscula(nombre.value))
            campos_vacios.push("El nombre debe empesar con Mayuscula y con solo un especio de por medio\n");
    }

//apellido
    if(apellidos_vacio) 
    { 
        if(apellidos_vacio) campos_vacios.push("Faltan los Apellidos\n");
    } else {
        if(!empesar_con_mayuscula(apellidos.value))
            campos_vacios.push("El apellido debe empesar con Mayuscula y con solo un especio de por medio\n");
    }


//genero
    if(!genero.value){
        campos_vacios.push("Se debe seleccionar un genero\n");
    }
// Foto
    if(foto.value)
    {
        var exp_jpg_bmp=/(.jpg|.bmp)$/; 
     
        if(!exp_jpg_bmp.test(foto.value)){
            campos_vacios.push("La foto debe ser extención '.jpg' o '.bmp'\n");
        }

    }

    if(campos_vacios.length > 1)
    {
        alert(campos_vacios);
        return false;
    }
    else{
        alert("Formulario válido");
    }     
    
}

function habilitarInput() {
    var otro = document.formulario.otrochb;
    if(otro.checked){
        document.getElementById("activar").disabled = false; 
    }else
    document.getElementById("activar").disabled = true;
}


//metodos auxiliares

//verificar que un campo de texto este realmente vacio
function esta_vacio(valor){
    var vacio = false;
    var exp_no_espacio = /^\s+$/;
    if (!valor.value || valor.value.length == 0 || exp_no_espacio.test(valor.value) )
    {
        return true;
    }
    return vacio;
}

//comprobar que el o los nombre empiesan con mayuscula y tienen solo letras
function empesar_con_mayuscula(cadena){
    var exp = /^[A-Z][a-z_]/;  
    var todas_empiezan_con_mayuscula = true;    
    var dividido = cadena.split(/\s/);
    for(i = 0, len = dividido.length; i < len; i++){
        if(!exp.test(dividido[i])){
            todas_empiezan_con_mayuscula = false;
        }
    }
    return todas_empiezan_con_mayuscula;
}