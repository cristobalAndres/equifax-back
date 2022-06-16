import swaggerJsdoc from 'swagger-jsdoc';

export const getSwaggerSpecs = (): object => {
  const options = {
    swaggerDefinition: {
      openapi: '3.0.0',
      info: {
        title: 'Equifax',
        version: '1.0.0',
        description:
          "Servicios Equifax",
        license: {
          name: 'All Rights Reserved',
        },
        contact: {
          name: 'equifax',
          email: '',
        },
      },
      servers: [
        {
          url: '/',
        },
      ],
      components: {
        securitySchemes: {
          bearerAuth: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
      security: [
        {
          bearerAuth: [] as any[],
        },
      ],
    },
    apis: [
    //   './src/middleware/error.ts',
    //   './src/interfaces/**/*.ts',
      './routes/**/*.ts',
    ],
  };
  const specs = swaggerJsdoc(options);
  return specs;
};
