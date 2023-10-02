import React, { useState, useEffect } from 'react';
import HashLoader from "react-spinners/HashLoader";
import SaladCard from './SaladCard';
import { getSalads } from '../../api';

const SaladsList = () => {
    const [salads, setSalads] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    const loadSalads = () => {
        getSalads()
        .then((data) => {
            setSalads(data);
        })
        .catch((error) => {
            setError(error);
        })
        .finally(() => {
            setIsLoading(false);
        })
    }

    useEffect(() => {
        loadSalads();
    }, []);

    const renderSalads = () => {
        return salads.map((salad) => <SaladCard loadSalads={loadSalads} salad={salad} key={salad._id} />)
    }

    return (
        <>
            <h1>Salads list</h1>

            <section>
                {error && <h2 style={{backroundColor: 'red', color: 'white'}}>{error.message}</h2>}
                {salads.length > 0 ? renderSalads() : <h2>Nothing found</h2>}
            </section>

            <HashLoader
                color="#36d7b7"
                size={200}
                loading={isLoading}
                cssOverride={{
                    display: "block",
                    margin: "0 auto",
                    borderColor: "red",
                }}
            />
        </>
    );
}

export default SaladsList;
