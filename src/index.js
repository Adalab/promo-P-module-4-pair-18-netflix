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

//endpoints
server.get('/movie/:movieId', (req, res) => {
  console.log(req.params)
 });


server.get('/movies', (req, res) => {
  //Guarda el valor del query param de género en una constante
  const genderFilterParam = req.query.gender;
  const staticServerPathWeb = '../web/public'; // En esta carpeta ponemos los ficheros estáticos para que se guarden
  const staticServerPathImages = './src/public-movies-images/'
app.use(express.static(staticServerPathWeb));
  //respuesta de listado pintado  **
  res.json({
    success: true,
    movies: moviesData.movies.filter((item) =>
      item.gender.includes(genderFilterParam)
    ),
  });
});


