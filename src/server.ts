import config from 'config';
import * as http from 'http';
import app from './app';

const PORT = config.get('port');

if (!PORT) {
  console.log('PORT is not available in config');
}

const server = http.createServer(app);

function onListening() {
  console.log(`Server started listening on port ${PORT}`);
}

function onError(err: any) {
  console.log(err);
}

server.on('listening', onListening);
server.on('error', onError);

server.listen(PORT);