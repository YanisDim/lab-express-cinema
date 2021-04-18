const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie.model')

/* GET home page */
router.get('/', (req, res, next) => res.render('index'));


router.get('/movies', (req, res, next)=>
Movie.find()
.then((myMovies)=> res.render('movies.hbs', {myMovies}))
.catch(()=> console.log(err))
)

router.get('/movies/:id', (req, res, next)=>{
    const{id} = req.params
    

    Movie.findById(id)
    .then((data)=>res.render('../views/movie-details.hbs', {data}))
    .catch(()=>console.log(err))
})


module.exports = router;
