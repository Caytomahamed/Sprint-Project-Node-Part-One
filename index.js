require('dotenv').config();

const server = require('./api/server.js');

// DEVELOPMENT ENVIRONMENT
// PRODUCTION ENVIRONMENT

// ENVIRONMENT VARIABLES - STATIC AND DYNAMIC

const port = process.env.PORT || 4000

server.listen(port, () => {
  console.log(`\n*** Server Running on http://localhost:${port} ***\n`);
});
