const axios = require('axios');




const lugarLatLng = async(direccion) => {

    const encoderURL = encodeURI(direccion);

    const instancia = axios.create({
        baseURL: `https://community-open-weather-map.p.rapidapi.com/weather?q=${encoderURL}`,
        headers: {
            'x-rapidapi-key': '741e3b162fmsh4e8092aaa9de5cap16ba7bjsn5d4817ec2c9c',
            'x-rapidapi-host': 'community-open-weather-map.p.rapidapi.com'
        }
    });

    const resp = await instancia.get();

    const datos = resp.data;
    const nombre = datos.name;
    const coordenadas = datos.coord;
    const lat = coordenadas.lon;
    const lng = coordenadas.lat;
    // console.log(datos);
    return {
        nombre,
        lat,
        lng
    }

};


module.exports = {
    lugarLatLng
}