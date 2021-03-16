import React, {useEffect, useState} from 'react';
import { movieAPI } from "../../api";
import MoviePresenter from "./MoviePresenter"

const MovieContainer = () => {
    const [movies, setMovies] = useState({
        nowPlaying: [],
        topRated: [],
        popular: [],
        upcoming: [],
        nowPlayingError: null,
        topRatedError: null,
        popularError: null,
        upcomingError: null,
        loading: true
    })

    const getdata = async () => {
        const[nowPlaying, noPlayingError] = await movieAPI.nowPlaying()
        const[topRated, topRatedError] = await movieAPI.toprated()
        const[popular, popularError] = await movieAPI.popular()
        const[upcoming, upcomingError] = await movieAPI.upcomimg()
        setMovies({
            nowPlaying,
            topRated,
            popular,
            upcoming,
            noPlayingError,
            topRatedError,
            popularError,
            upcomingError,
            loading: false
        })

    }

    useEffect(() => {
        getdata()
    }, [])
    return (
        <MoviePresenter {...movies} />


    );
};

export default MovieContainer;
