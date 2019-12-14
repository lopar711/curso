class Pais{

    nombre;
    capital;
    codigo;

    constructor(datos){
        this.nombre = datos['nom'];
        this.capital = datos['cap'];
        this.codigo = datos['cod'];
    }
}

export default Pais;
