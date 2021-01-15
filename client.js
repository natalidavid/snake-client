
const net = require('net');

/*
 * Establishes connection with the game server
 */
const connect = function() {
  const conn = net.createConnection({ 
    host: '138.197.169.51',
    port: 50541
  });

  // interpret incoming data as text
  conn.setEncoding('utf8'); 

  // somehow get a response back from the server after we connect to it which notifies us we connected!
  // once we recieve the response from the server notifying us, as the client we are connected, then we can...
  // console log for the users convience they connected to the server then writing back out to the server our snakes name
  conn.on('connect', () => {
    console.log('Connected to the server');
    conn.write('Name: SNK');
  });

  return conn;
}

module.exports = { connect };