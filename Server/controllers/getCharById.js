const axios = require("axios")

function getCharById(res, id) {
    const URL = `https://rickandmortyapi.com/api/character/${id}`

    axios(URL)
    .then (response => {
        res(response.data);

    })
    .catch(error => {
        console.error("Error: ", error);
        res(null);
    })
}

module.exports = getCharById