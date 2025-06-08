const { BASE_URL } = require('../config');
const { getServiceTicket, ask } = require('../utils.js');

async function getDeviceByIp() {
    const serviceTicket = getServiceTicket();
    const deviceIp = await ask('Enter the device IP: ');

    fetch(`${BASE_URL}/network-device/ip-address/${deviceIp}`, {
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

getDeviceByIp();

//10.0.1.4