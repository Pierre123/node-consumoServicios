const argv = require('./config/yargs').argv;
const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

/* lugar.lugarLatLng(argv.direccion).then((result) => {
    console.log(result);
}).catch((err) => {
    if (err.response) {
        console.log(err.response.data);
        console.log(err.response.data.message);
        console.log(`===No hay resultados para ${argv.direccion}===`);
    }
});
console.log(argv.direccion); */


/* clima.getClima(-16.92, 145.77).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
}); */

const getInfo = async(direccion) => {
    try {
        const coordenadas = await lugar.lugarLatLng(direccion);
        const temperatura = await clima.getClima(coordenadas.lat, coordenadas.lng);

        return `El clima de ${coordenadas.nombre} es de ${temperatura}`
    } catch (e) {
        return `No se pudo determinar el clima de ${direccion}.`
    }
};

getInfo(argv.direccion).then((result) => {
    console.log(result);
}).catch((err) => {
    console.log(err);
});