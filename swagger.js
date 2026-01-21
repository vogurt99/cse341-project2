const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Inventory Management API',
        description: 'API for managing products and categories',
    },
    host: 'cse341-project-2-qp1l.onrender.com',
    schemes: ['https'],
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);