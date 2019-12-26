
class Preguntas{

    static cargarJson(){

              return fetch('./app/Trivia.php')
                    .then(res => res.json())
                    .then(data => data.preguntas); 
                
    }


}
export default Preguntas;




