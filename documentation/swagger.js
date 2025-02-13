import swaggerAutogen from 'swagger-autogen';

const doc = {
    openapi: "3.0.0",
    info: {
        title: "Post Image API",
        version: "1.0.0",
        description: "This API allows users to upload and manage images.",
    },
    servers: [
        {
            url: "http://localhost:3000", 
            description: "Local server"
        }
    ],
    components: {
        securitySchemes: {
            bearerAuth: {
                type: "",
                scheme: "bearer",
                bearerFormat: "JWT",
            }
        }
    },
    security: [ ]
};

const outputFile = "./documentation/swagger_output.json"; 
const endpointsFiles = ["../server.js"]; 

swaggerAutogen()(outputFile, endpointsFiles, doc);
