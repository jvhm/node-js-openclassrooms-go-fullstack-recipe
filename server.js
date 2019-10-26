'use strict'

/**
 * @file server.js
 * 
 * Entry point for the node.js server.
 */

// Imports
const http = require('http');
const app = require('./app');

// Variables and constants
const normalizePort = val => {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
};
const port = normalizePort(process.env.PORT || 3000);
const errorHandler = (error) => {
    if(error.syscall !== 'listen') {
        console.error('An error occurred while accessing ' + bind);
        throw error;
    }
    
    switch(error.code) {
        case 'EACCESS':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            console.error('An error occurred while accessing ' + bind);
            throw error;
    }
}

const server = http.createServer(app);
server.listen(port);

server.on('error', errorHandler)
server.on('listening', () => {
    console.log('Server listening on port ' + port);
});