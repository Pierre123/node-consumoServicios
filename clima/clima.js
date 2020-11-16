const axios = require('axios');

const getClima = async(lat, lng) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=9b7595b39e7f78a5a5924d6de11f4d46&units=metric`);

    return resp.data.main.temp;
};


module.exports = {
    getClima
}