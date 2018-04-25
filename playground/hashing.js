const { SHA256 } = require('crypto-js');
const jwt = require('jsonwebtoken');

let data = {
    id: 10
};

let token = jwt.sign(data, '321654987');
console.log(token);

let decoded = jwt.verify(token, '321654987');
console.log(decoded);


/* 
let message = 'I am user number 3';

let hash = SHA256(message).toString();

console.log('Message:', message);
console.log('Hash:', hash);

let data = {
    id: 4
};

let token = {
    data,
    hash: SHA256(JSON.stringify(data)).toString()
}
 */