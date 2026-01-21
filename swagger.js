const swaggerAutogen = require('swagger-autogen')();

const doc = {
    info: {
        title: 'Inventory Management API',
        description: 'API for managing products and categories',
    },
    host: 'cse341-project-2-qp1l.onrender.com', 
    schemes: ['https'],
    definitions: {
        Product: {
            productName: "any",
            description: "any",
            price: 0,
            stockQuantity: 0,
            category: "any",
            manufacturer: "any",
            restockDate: "any"
        },
        Category: {
            categoryName: "any",
            department: "any"
        }
    }
};

const outputFile = './swagger.json';
const endpointsFiles = ['./server.js'];

swaggerAutogen(outputFile, endpointsFiles, doc);