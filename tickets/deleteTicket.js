const { BASE_URL } = require('../config');
const fs = require('fs');
const path = require('path');
const { getServiceTicket } = require('../utils.js');

const serviceTicket = getServiceTicket();

fetch(`${BASE_URL}/ticket/${serviceTicket}`, {
    method: 'DELETE',
    headers: {
        'Content-Type': 'application/json',
        'X-Auth-Token': serviceTicket,
    }
})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        fs.unlinkSync(path.join(__dirname, '../ticket.json'));
    })
    .catch((error) => {
        console.error('Error:', error);
    });
