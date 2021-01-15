/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.handleUserInput = function(key) {
    // for exiting with ctrl + c
    if (key === '\u0003') {
      process.exit();
    }
  }
  stdin.on('data', handleUserInput);
  
  return stdin;
}

module.exports = { setupInput }
