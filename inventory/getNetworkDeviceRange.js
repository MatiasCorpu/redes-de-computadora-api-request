const { BASE_URL } = require('../config');
const { getServiceTicket, ask } = require('../utils');

const serviceTicket = getServiceTicket();

async function getNetworkDeviceRange() {
    const start = await ask('Enter the start index: ');
    const end = await ask('Enter the end index: ');

    fetch(`${BASE_URL}/network-device/${start}/${end}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'X-Auth-Token': serviceTicket,
        },
    })
        .then(response => response.json())
        .then(data => {
            console.log('Respuesta completa:', data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });
}

getNetworkDeviceRange();