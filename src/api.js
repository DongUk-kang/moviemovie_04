import axios from "axios";

const TMDB_KEY = "c9349dd29b0c396b729d9fc6016daf67";

const makeRequest= (path, params) =>
    axios.get(`https://api.themoviedb.org/3${path}`, {
        params: {
            ...params,
            api_key: TMDB_KEY,
        },
    });

const getAnything = async (path, params = {}) => {
    try {
        const {
            data: { results },
            data,
        } = await makeRequest(path, params)
        return [results || data, null]
    } catch (e) {
        return [null, e];
    }
}

export const movieAPI = {
    lastest: () => getAnything("/movie/lastest"),
    nowPlaying: () => getAnything("/movie/now_playing"),
    toprated: () => getAnything("/movie/top_rated"),
    popular: () => getAnything("/movie/popular"),
    upcomimg: () => getAnything("/movie/upcoming"),
    detail: (id) => getAnything(`movie/${id}`),
    search: query => getAnything("/search/movie", { query })
}

export const tvAPI = {
    lastest: () => getAnything("/tv/lastest"),
    ontheair: () => getAnything("/tv/on_the_air"),
    popular: () => getAnything("/tv/popular"),
    toprated: () => getAnything("/tv/top_rated"),
    detail: (id) => getAnything(`/tv/${id}`),
    search: query => getAnything("/search/tv", { query })
}