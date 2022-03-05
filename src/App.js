import React, { useEffect, useState } from 'react'
import Card from './components/Card'
import Header from './components/Header'

const API_KEY = `http://www.omdbapi.com/?apikey=7a7ee078`;

const App = () => {
    const [movies, setMovies] = useState([]);
    
    const searchMovies = async (title) => {
        const response = await fetch(`${API_KEY}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search)
    }
    
    const onChange = (val) => {
        searchMovies(val === '' ? 'superman' : val);
    }
    
    useEffect(() => {
        searchMovies('superman')
    }, [])
    
    return (
        <>
            <Header onChange={onChange} />
            <div className="container m-auto flex justify-center items-center">
                <p className="text-base dark:text-white my-5">Movies List</p>
            </div>
            <div className="container m-auto flex flex-wrap my-3 justify-center">
                {movies?.length > 0 ? (
                    movies.map((movie) => (
                        <Card
                            key={movie.Title + movie.Year}
                            title={movie.Title}
                            image={movie.Poster}
                        />
                    ))
                ) : (
                    <div className="container m-auto flex justify-center items-center">
                        <p className="text-4xl dark:text-white my-5">Movie not found</p>
                    </div>
                )}
            </div>
        </>
    )
}

export default App