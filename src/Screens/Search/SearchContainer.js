import React, {useState} from 'react';
import SearchPresenter from "./SearchPresenter";
import {movieAPI, tvAPI} from "../../api";

const SearchContainer = () => {
    const [keyword, setKeyword] = useState("")
    const [results, setResults] = useState({
        movies : [],
        shows : [],
        moviesError: null,
        showsError: null,
        loading: false
    })

    const onChange = (event) => setKeyword(event.target.value)


    const onSubmit = async () => {
        setResults({ loading : true })

        if (keyword === "") {
            return
        }

        const [movies, moviesError] = await movieAPI.search(keyword)
        const [shows, showsError] = await tvAPI.search(keyword)

        setResults({
            movies,
            shows,
            moviesError,
            showsError,
            loading: false
        })
        console.log(shows)
    }

    return (
        <SearchPresenter
            {...results}
            // movies={results.movies}
            // shows={results.shows}
            keyword={keyword}
            onChange={onChange}
            onSubmit={onSubmit}
            // loading={results.loading}
            // moviesError={results.moviesError}
            // showsError={results.showsError}
        />
    );
};

export default SearchContainer;
