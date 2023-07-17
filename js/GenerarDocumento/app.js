
const { generarTabla } = require('./funciones')



const generarTabla=()=>{

    const base = 9;


generarTabla(base)
    .then(mensaje => console.log(mensaje))
    .catch(error => console.log(error))


}
