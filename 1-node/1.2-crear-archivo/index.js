const fs = require('fs');

const path = './';
const nameFile = 'my-file2.txt';
// Regresar ../
// Ahi mismo ./
const contentForFile = 'Hola Mundo! Esto lo escribi desde node';
// Path absoluto: C:\Users\USER\Desktop\Clase MOD 4\Nueva carpeta\js-avanzado-del-angel\1-node\1.2-crear-archivo
// Path relativo: 1.2-crear-archivo
//const filePath = path + '/' + nameFile;
const filePath = `${path}/${nameFile}`;
fs.writeFile(filePath, contentForFile,(error) => {
    if(error) {
        throw error;
    }else{
        console.log('archivo creado con exito...!!');
    }
});