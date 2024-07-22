var myLogModule = require('./log.js');
var person = require('./data.js');
const message = require('./Message');

myLogModule.info('I am Tetsuhiro U. Kodo');
myLogModule.warning('Warning node not found..');
myLogModule.error('Error 404');

console.log(message);
console.log(message, person.firstName + ' ' + person.lastName);
