const {BASE_URL} = require('../config');
const {getServiceTicket, ask} = require('../utils.js');

async function getHostByIp(){
    const serviceTicket = getServiceTicket();
    const hostIp = await ask('Enter the host IP address: ');

    fetch(`${BASE_URL}/host/ip-address/${hostIp}`, {
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

getHostByIp();

// example: 10.0.2.130