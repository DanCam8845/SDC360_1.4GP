process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const configureExpress = require('./config/express');
const app = configureExpress();
app.listen(3002);
module.exports = app;
console.log('Server running at http://localhost:3002/');