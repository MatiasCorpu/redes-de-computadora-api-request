const fs = require('fs');
const path = require('path');
const readline = require('readline');

function getServiceTicket() {
    try {
        const session = JSON.parse(fs.readFileSync(path.join(__dirname, 'ticket.json'), 'utf8'));
        return session.serviceTicket;
    } catch (e) {
        console.error('No se pudo leer el serviceTicket:', e);
        return null;
    }
}

function ask(question) {
    return new Promise((resolve) => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

module.exports = { getServiceTicket, ask };