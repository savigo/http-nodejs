import { createServer } from 'http';

createServer((req, res) => {
  res.write('Hello World!   quiero tacos');
  res.end();
}).listen(process.env.PORT);
