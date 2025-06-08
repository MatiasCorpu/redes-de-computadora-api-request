const { BASE_URL } = require('../config');
const { getServiceTicket, ask } = require('../utils.js');

async function getDeviceById() {
    const serviceTicket = getServiceTicket();
    const deviceId = await ask('Enter the device ID: ');

    fetch(`${BASE_URL}/network-device/${deviceId}`, {
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

getDeviceById();

//CAT1010J4FO-uuid
