const movies = [
   {
     id: 1,
     name: "Inception",
     description: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea.",
     year: 2010,
     genre: "Sci-Fi"
   },
   {
     id: 2,
     name: "The Matrix",
     description: "A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.",
     year: 1999,
     genre: "Action, Sci-Fi"
   },
   {
     id: 3,
     name: "Interstellar",
     description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
     year: 2014,
     genre: "Adventure, Drama, Sci-Fi"
   },
   {
     id: 4,
     name: "The Dark Knight",
     description: "When the menace known as the Joker emerges, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
     year: 2008,
     genre: "Action, Crime, Drama"
   },
   {
     id: 5,
     name: "Fight Club",
     description: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into something much more.",
     year: 1999,
     genre: "Drama"
   }
 ];
 
 const parasite = {
   id: 6,
   name: "Parasite",
   description: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
   year: 2019,
   genre: "Drama, Thriller"
 }
 
 const madMax = {
   id: 7,
   name: "Mad Max: Fury Road",
   description: "In a post-apocalyptic wasteland, Max teams up with Furiosa to escape a tyrant who controls a vital water supply.",
   year: 2015,
   genre: "Action, Adventure, Sci-Fi"
 }

 const theBucketList = {
   id: 3,
   name: "The Bucket List",
   description: "Two terminally ill men escape from a cancer ward and head off on a road trip with a wish list of to-dos before they die",
   year: 2007,
   genre: "Comedy-Drama"
 }

const onlineMovieStore = {
   movies: movies,
   getAllMovies() {
     this.movies.forEach(movie => {
       console.log(`Title: ${movie.name} Genre: ${movie.genre} Year: ${movie.year}`);
     });
   },
   getMovieById(id) { 
     return this.movies.find(movie => movie.id === id);
   },
   getAllMoviesAfterYear(year) { 
     return this.movies.filter(movie => movie.year > year);
   },
   createNewMovie(movie) {
     if (movie.name && movie.genre) {
       this.movies.push(movie);
       return movie;
     } 
     console.log("Movie Name and Genre are required!");
     return;
   },
   updateMovies(id, newMovie) {
      let movieIndex = this.movies.findIndex(movie => movie.id === id);
      if (movieIndex !== -1) {
        if (newMovie.name && newMovie.genre) {
          this.movies[movieIndex] = newMovie;
          return newMovie;
        } else {
          alert("Movie Name and Genre are required!");
        }
      } else {
        alert("wrong Id");
        return;
      }
   },
   deleteMovie(id) {
    const movieInd = this.movies.findIndex(movie => movie.id === id);
    if (movieInd !== -1) {
      this.movies.splice(movieInd, 1);
      return true;
   }
   alert("wrong Id");
   return false;
 }
}
 console.log(onlineMovieStore.movies); // list of all movies
onlineMovieStore.getAllMovies() // title: string, genre: string, year:number
const movieById = onlineMovieStore.getMovieById(200) // : movie | undefined
console.log('movie-by-id: ', movieById)
 const oldMovies = onlineMovieStore.getAllMoviesAfterYear(2008) // filter movies after year
 console.log(oldMovies)
 console.log(onlineMovieStore.createNewMovie(parasite)); // add new movie
 onlineMovieStore.getAllMovies();
 console.log(onlineMovieStore.movies);
 onlineMovieStore.createNewMovie(madMax) // add new movie
 console.log(onlineMovieStore.movies);
 console.log('shape:', onlineMovieStore);
 console.log(onlineMovieStore.updateMovies(3, theBucketList));
 console.log(onlineMovieStore.movies);
 console.log(onlineMovieStore.deleteMovie(1));
 