
/*
    Una variable representa un espacio en la memoria donde se almacena un valor
    Javascript es un lenguaje 'dinámico' por lo que no es necesario definir
    los tipos de las variables.

    Existen 2 tipos de variables en Javascript

     - Las variables de tipo 'primitivas', que se podria decir tienen un formato simple de variable = valor
     - Las variables de tipo 'referencial', que almacenan un objeto, o sea variable = objeto

     Para definir en código las variables usamos las palabras reservadas ' let ', ' var ', o ' const ' segun sea el caso.

     ' let ' y ' var ' se pueden usar indistintamente (según la version del interprete ES(X)), para designar un valor 
     que puede ser modificado posteriormente.
     
     ' const ' se utiliza para definir valores constantes.

     Se puede usar cualquier palabra o cadena para designar variables excepto las palabras que son 'reservadas' 
*/

// Las variables tipo primitivas y su declaración es la siguiente:


    let tipo_String    = "una cadena de texto";
    let tipo_Number    = 711;
    let tipo_Boolean   = false; //tipo boleano solo puede ser 'true' o 'false'
    let tipo_Undefined = undefined; //undefined se refiere a un valor no presente o que nunca se definio
    let tipo_Null      = null; //este tipo de variable si tiene valor asignado, pero no es válido, se convierte en un objeto NULO

// Las variables tipo referencial y su declaración es la siguiente:

    let tipo_Funcion = ()=>"funcion que solo retorna este texto";
    let tipo_Array   = [... 'HOLA']; //esta notacion crea un array con las letras de la palabra 'HOLA'
    let tipo_OBjeto  = {
                            'indice':'valor',
                            'indice2': 'valor2'
                        }

/* 
    TIP:
    Para comprobar el tipo de de alguna variable usa la funcion 'typeof'
*/ 

console.log(typeof(tipo_Number));






