import React, { useState, useEffect } from 'react';
import Card from '../components/Card';
import Characters from '../components/Characters';
import { getData } from '../fetch/fetch'

const Home = () => {
    const [films, setFilms] = useState([])
    const URL = 'https://swapi.dev/api/films/'
  
    useEffect(() => {
    async function fetchData() {
        let res = await getData(URL)
        setFilms(res.results)
      }
      fetchData();
    },[])

    return (

             <>
             <div>
                <h2 className="title">Films:</h2>
                    <div className="flex">
                            {films.map((film, i) => {
                            return <Card key={i} id={i} film={film} />
                            })}
                    </div >
                <h2 className="title">Characters:</h2>
                     <Characters/>
            </div>
            </>
    );
}

export default Home;