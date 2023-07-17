
const fs= require('fs')


//aplicamos asincronismo
const generarTabla = async (base) => {
    let respuesta = '';
    try {
        for (let i = 1; i < 11; i++) {
            respuesta += `${base}*${i}=${base * i} \n`;
        }
        fs.writeFileSync(`tabla_${base}.txt`, respuesta)
        
        return `el archivo tabla_${base}.txt se genero correctamente`;
    } catch (error) {

    }
}

module.exports = {
    generarTabla
}