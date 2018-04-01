var buffer = new Buffer('Long Lê', 'utf-8');
console.log('buffer: ', buffer, typeof buffer, buffer.toString());
console.log('json: ', buffer.toJSON());