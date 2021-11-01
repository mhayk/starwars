import React from 'react';
import { useQuery } from 'react-query';

import Person from './Person';

import api from '../services/api';

const fetchPeople = async () => {
    const response = await api.get('/people');
    return response.data;
}

function People() {
    const { data, status } = useQuery('people', fetchPeople);

    console.log(data);

    return <div>
        <h2>People</h2>
        {status === 'error' && (
            <div>Error fetching data</div>
        )}

        {status === 'loading' && (
            <div>Loading data...</div>
        )}

        {status === 'success' && (
            <div>
                {data.results.map(person => <Person key={person.name} person={person} />)}
            </div>
        )}
    </div>
}

export default People;