import swaggerJSDoc from "swagger-jsdoc";
import { SwaggerUiOptions } from "swagger-ui-express";

const options : swaggerJSDoc.Options = {
    swaggerDefinition: {
        openapi: '3.0.2',
        tags: [
            {
                name: 'Products',
                description: 'API operations related to products'
            }
        ],
        info: {
            title: 'REST API Node.js / Express / TypeScript',
            version: '1.0.0',
            description: "API Docs for Products"
        }
    },
    apis: ['./src/router.ts']
}

const swaggerSpec = swaggerJSDoc(options)

const swaggerUiOptions : SwaggerUiOptions = {
    customCss : `
        .swagger-ui .topbar a {
            content: url('https://cdn.prod.website-files.com/65187dd05016f10da9931172/65495c6786cc60c3438a4178_ColumnsofDevelopmentlogo-removebg-preview.png');
            height: 145px;
            max-width: 120px;
        }
        .swagger-ui .topbar {
            background-color: #2b3b45;
        }    
    `,
    customSiteTitle: 'Documentacion REST API  Express / TypeScript'
}

export default swaggerSpec
export {
    swaggerUiOptions
}
