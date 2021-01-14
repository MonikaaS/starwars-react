import React, { useState, useEffect } from 'react';
import { getData } from '../fetch/fetch'

const DetailPage = ({ match }) => {
    const id = parseInt(`${match.params.id}`) + 1
    const [film, setFilm] = useState([]);
    const URL = 'https://swapi.dev/api/films/'

    useEffect(() => {
    async function fetchData() {
        let res = await getData(URL + `${id}`)
        setFilm(res) 
      }
      fetchData();
    },[])

    return (
        <>
        <div className="Card-detail">
            <h2>{film.title}</h2>
                <div className="flex">
                    <div className="info">
                        <p><span>director:</span>  {film.director}</p>
                        {film.planets ? <p><span>planets:</span>  {film.planets.length}</p>:
                        <p><span>planets:</span>  no planets</p>
                        }

                        {film.species ? <p><span>species:</span>  {film.species.length}</p>:
                        <p><span>species:</span>  no species</p>
                        }

                        {film.starships ? <p><span>starships:</span>  {film.starships.length}</p>:
                        <p><span>starships:</span>  no starships</p>
                        }

                        {film.vehicles ? <p><span>vehicles:</span>  {film.vehicles.length}</p>:
                        <p><span>vehicles:</span>  no vehicles</p>
                        }
                    </div>
                    <p className="intro">{film.opening_crawl}</p>
            </div>
            </div>
        </>
    );
}

export default DetailPage;