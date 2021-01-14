import React, { useState, useEffect } from 'react';
import { getData } from '../fetch/fetch'

const Characters = () => {
    const URL = 'https://swapi.dev/api/people/'
    const [characters, setCharacters] = useState([])
    const [filter, setFilter] = useState('all');

    useEffect(() => {
        async function fetchData() {
            let res = await getData(URL)
            setCharacters(res.results)
          }
          fetchData();
        },[])

        console.log(characters)
        useEffect(() => {  
            setCharacters([]);  
            const filtered = characters.map(characters => ({ 
                ...characters, filtered: characters.gender.includes(filter) 
            }));  
            setCharacters(filtered);
        }, [filter]);

    return (
        <>
        <button active={filter === 'male'} onClick={() => setFilter("male")}>Male</button>
        <button active={filter === 'female'}onClick={() => setFilter("female")}>Female</button>
        <button active={filter === 'n/a'}onClick={() => setFilter("n/a")}>N/A</button>
            <div className="flex">

            {characters.map(
                characters => characters.filtered === true ? ( 
                
                <div key={characters.name} className="Card">
                <h2>{ characters.name }</h2>
                <div className="Card-text">
                    <p><span>Gender</span>: { characters.gender }</p>
                </div>
                </div>) : '')}

            </div>
        </>
    )
}

export default Characters