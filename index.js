const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const app = express();
const port = process.env.PORT || 3000;

// Basic Pokémon data
const pokemons = ["Bulbasaur", "Charmander", "Squirtle", "Pikachu", "Eevee"];

// Swagger options
const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Pokemon API',
      version: '1.0.0',
      description: 'A simple API to fetch Pokémon names',
      contact: {
        name: 'Akanksha1225',
      },
      servers: [{ url: 'http://localhost:3000' }],
    },
  },
  apis: ['./index.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

/**
 * @swagger
 * /pokemon:
 *   get:
 *     summary: Returns a list of Pokémon names
 *     responses:
 *       200:
 *         description: A list of Pokémon names
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: string
 */
app.get('/pokemon', (req, res) => {
  res.json(pokemons);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
