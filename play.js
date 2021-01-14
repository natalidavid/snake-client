const connect = require('./client.js');

console.log('Connecting ...');
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');

  const handleUserInput = function(key) {
    if (key === '\u0003') {
      process.exit();
    }
  }

  stdin.on('data', handleUserInput);
  return stdin;
}

const { connect } = require('./client');
console.log('Connecting ...');
connect(); 
connect();

/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

setupInput();
