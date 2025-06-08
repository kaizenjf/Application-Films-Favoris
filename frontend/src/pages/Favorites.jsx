import { useState } from "react";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard"; // si ce n’est pas déjà importé
import "../css/Favorites.css"; // pour les styles si tu en as

function Favorites() {
    const { favorites } = useMovieContext();
    const [searchQuery, setSearchQuery] = useState("");

    if (favorites && favorites.length > 0) {
        return (
            <div className="favorites">
                <h2>Your Favorites</h2>

                <input
                    type="text"
                    placeholder="Search in favorites..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="search-input"
                />

                <div className="movies-grid">
                    {favorites
                        .filter(movie => movie.title.toLowerCase().startsWith(searchQuery.toLowerCase()))
                        .map(movie => (
                            <MovieCard movie={movie} key={movie.id} />
                        ))}
                </div>
            </div>
        );
    }

     
}

export default Favorites;