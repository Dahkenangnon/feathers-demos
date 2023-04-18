// This file is used to generate the secret-keys.g.js file which used 
// to store the secret keys for the authentication in the demo app.


const crypto = require('crypto');
const fs = require('fs');
const path = require('path');

const generateRandomKey = () => {
    return crypto.randomBytes(32).toString('hex');
};

const generateKeys = (count) => {
    let keys = [];
    for (let i = 0; i < count; i++) {
        keys.push(generateRandomKey());
    }
    return keys;
};

const keys = generateKeys(1000);

const writeKeys = (keys) => {

    const file = fs.createWriteStream(path.join(__dirname, 'keys.g.js'));
    file.on('error', (err) => {
        console.log(err);
    });
    file.write('module.exports = [\r\n');
    keys.forEach((key, index) => {
        file.write(`\t'${key}',\r\n`);
    });
    file.write(']');
    file.end();
};

writeKeys(keys);