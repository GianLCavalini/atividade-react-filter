
import Card  from "./componets/Card";
import movies from "./componets/Data";
import Movies from "./Data/index";


function App() {
     return (
        <div>
        
         {Movies.map((currentMovie) => {
            console.log(currentMovie);
            return (
            <Card 
            movieTitle={currentMovie.original_title}
            sinopse={currentMovie.overview}
            img={`https://image.tmdb.org/t/p/w500/${currentMovie.backdrop_path}`} />
            );
         })}
         
         
        </div>

     );
  
}

export default App();
