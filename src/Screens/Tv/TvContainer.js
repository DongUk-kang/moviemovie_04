import React, {useState, useEffect} from 'react';
import { tvAPI } from "../../api";
import TvPresenter from "./TvPresenter";


const TvContainer = () => {
    const [tvs, setTvs] = useState({
        ontheair: [],
        popular: [],
        topRated: [],
        ontheairError: null,
        popularError: null,
        topRatedError: null,
        loading: true
    })

    const getdata = async () => {
        const [ontheair, ontheairError] = await tvAPI.ontheair()
        const [popular, popularError] = await tvAPI.popular()
        const [topRated, topRatedError] = await tvAPI.toprated()
        console.log(ontheair)
        setTvs({
            ontheair,
            popular,
            topRated,
            ontheairError,
            popularError,
            topRatedError,
            loading: false
        })
    }

    useEffect(() => {
        getdata()
    }, [])
    return (
        <TvPresenter
            {...tvs}
        />
    );
};

export default TvContainer;
