import React, { useState } from 'react';
import * as S from './styled'
import axios from 'axios'

//import { Link } from "react-router-dom";

import Cards from '../../components/Cards'

function Home() {
  const [movieName, setMovieName] = useState('')
  const [movies, setMovies] = useState('')
  const [loading, setLoading] = useState(true)

  function handleKeyUp(e) {
    const titleFormated = movieName.split(' ').join('+')
    const keyCode = e.which || e.keyCode;
    if (keyCode === 13) {
      axios
        .get(`http://www.omdbapi.com/?s=${titleFormated}&apikey=8568b783&type=movie`)
        .then(res => setMovies(res.data.Search))
        .catch(error => console.log(error))
        .finally(() => setLoading(false));
    }
  }


  return (
    <>
      <S.Container>
        <S.SearchWrapper>
          <h1>Encontre seu filme favorito</h1>
          <S.InputWrapper>
            <S.Input
              placeholder="Seu filme favorito"
              onChange={e => setMovieName(e.target.value)}
              onKeyUp={handleKeyUp}
            />


          </S.InputWrapper>
        </S.SearchWrapper>
      </S.Container>

      <S.CardContainer>
        {movies ? (
          <>
            {console.log(movies)}
            {movies.map(movie => (
              <S.Links key={movie.imdbID} to={`/detalhes/${movie.imdbID}`}>
                <Cards title={movie.Title} year={movie.Year} poster={movie.Poster} />
              </S.Links>
            ))}
          </>
        ) : null}

      </S.CardContainer>
    </>
  );
}

export default Home;