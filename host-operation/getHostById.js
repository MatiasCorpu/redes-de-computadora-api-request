const { BASE_URL } = require('../config');
const { getServiceTicket, ask } = require('../utils.js');

async function getHostById() {
    const serviceTicket = getServiceTicket();
    const hostId = await ask('Enter the host ID: ');

    fetch(`${BASE_URL}/host/${hostId}`, {
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
}

getHostById();

// example: PTT08108MO8-uuid