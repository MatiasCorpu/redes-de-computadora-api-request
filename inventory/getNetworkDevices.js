const { BASE_URL } = require('../config.js');
const { getServiceTicket } = require('../utils.js');

const serviceTicket = getServiceTicket();

fetch(`${BASE_URL}/network-device`, {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': serviceTicket,
    },
})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
    })
    .catch((error) => {
        console.error('Error:', error);
    });