const express = require('express');
const cors = require('cors');
//Importamos con require el JSON
const moviesData = require('./data/movies.json');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.get('/movies', (req, res) => {
  const response = {};
  //respuesta de listado pintado  **
  res.json({
    success: true,
    movies: moviesData.movies,
  });
});
