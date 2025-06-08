const { BASE_URL, user } = require('../config.js');
const fs = require('fs');
const path = require('path');

fetch(`${BASE_URL}/ticket`, {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
})
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        const ticket = data.response.serviceTicket;
        fs.writeFileSync(path.join(__dirname, '../ticket.json'), JSON.stringify({ serviceTicket: ticket }));
    })
    .catch((error) => { console.error('Error:', error); });
