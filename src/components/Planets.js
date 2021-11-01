import React from 'react';
import { useQuery } from 'react-query';
import Planet from './Planet';

import api from '../services/api';

const fetchPlanets = async () => {
    const response = await api.get('/planets');
    return response.data;
}

function Planets() {
    const { data, status } = useQuery('planets', fetchPlanets);

    console.log(data);

    return <div>
        <h2>Planets</h2>
        {/* <p>{status}</p> */}
        {status === 'error' && (
            <div>Error fetching data</div>
        )}

        {status === 'loading' && (
            <div>Loading data...</div>
        )}

        {status === 'success' && (
            <div>
                {data.results.map(planet => <Planet key={planet.name} planet={planet} />)}
            </div>
        )}
    </div>
}

export default Planets;