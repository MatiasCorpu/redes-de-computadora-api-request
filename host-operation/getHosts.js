const { BASE_URL } = require('../config');
const { getServiceTicket } = require('../utils');

const serviceTicket = getServiceTicket();

fetch(`${BASE_URL}/host`, {
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