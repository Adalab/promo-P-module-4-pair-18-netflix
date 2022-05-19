const express = require('express');
const cors = require('cors');
//Importamos con require el JSON
const movies = require('./data/movies.json');

// create and config server
const server = express();
server.use(cors());
server.use(express.json());
server.set('view engine', 'ejs');

// init express aplication
const serverPort = 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

//endpoints
server.get('/movie/:movieId', (req, res) => {
  console.log(req.params);
  //obtener la pelicula
  const foundMovie = movies.find(
    (eachMovie) => eachMovie.id === req.params.movieId
  );
  //Aquí le estamos diciendo que renderice la plantilla movie con los datos foundMovie.
  res.render('movie', foundMovie);
  console.log(foundMovie);
});

server.get('/movies', (req, res) => {
  //Guarda el valor del query param de género en una constante
  const genderFilterParam = req.query.gender;

  const staticServerPathWeb = '../web/public-react'; // En esta carpeta ponemos los ficheros estáticos para que se guarden
  const staticServerPathImages = './src/public-movies-images/';
  server.use(express.static(staticServerPathImages));
  const staticServerStyle = './src/public-styles';
  server.use(express.static(staticServerStyle));

  //respuesta de listado pintado  **
  res.json({
    success: true,
    movies: moviesData.movies.filter((item) =>
      item.gender.includes(genderFilterParam)
    ),
  });
});
