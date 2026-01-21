const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Inventory Management API',
        description: 'API for managing products and categories',
    },
    host: 'https://cse341-project-2-ys2b.onrender.com',
    schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./routes/index.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);