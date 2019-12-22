
class Preguntas{

    static cargarJson(){

              return fetch('./preguntas.json')
                    .then(res => res.json())
                    .then(data => data.preguntas); 
                
    }


}
export default Preguntas;




