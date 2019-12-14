//se inicia la clase con la palabra reservada class
//seguida del nombre de la clase en este caso Pais
//Nota: por convencion se utiliza el formato de letra Capital
//o sea la primera letra mayuscula 
//al definir el nombre de la clase
class Pais{
//declaracin de propiedades de la clase
    nombre;
    capital;
    codigo;

    //método mágico constructor, este método se ejecuta 
    //autom´ticamente al crear una instacia de la clase
    //este constructor necesita 1 parametro de entrada de tipo array
    //del cual extrae la informacion para colocar valores 
    //a las propiedades del objeto
    constructor(datos){
        this.nombre = datos['nom'];
        this.capital = datos['cap'];
        this.codigo = datos['cod'];
    }
}
//se exporta la clase para poder importar en otro lado
export default Pais;
