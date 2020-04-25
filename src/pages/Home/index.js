import React, { useState } from 'react';
import * as S from './styled'
import axios from 'axios'

import { Link } from "react-router-dom";

import Cards from '../../components/Cards'

function Home() {
  const [movieName, setMovieName] = useState('')
  const [movies, setMovies] = useState('')

  function hanldeSubmit(movieTitle) {

    const titleFormated = movieTitle.split(' ').join('+')
    axios
      .get(`http://www.omdbapi.com/?s=${titleFormated}&apikey=8568b783&type=movie`)
      .then(res => setMovies(res.data.Search))

  }
  return (
    <>
      <S.Container>
        <S.SearchWrapper>
          <h1>Encontre seu filme favorito</h1>
          <S.Form>
            <S.Input
              placeholder="Seu filme favorito"
              onChange={e => setMovieName(e.target.value)}
            />

            <S.ButtonSearch type='button' onClick={() => hanldeSubmit(movieName)}>Buscar</S.ButtonSearch>
          </S.Form>
        </S.SearchWrapper>
      </S.Container>

      <S.CardContainer>
        {movies ? (
          <>
            {console.log(movies)}
            {movies.map(movie => (
              <Link to={`/detalhes/${movie.imdbID}`}>
                <Cards key={movie.imdbID} title={movie.Title} year={movie.Year} poster={movie.Poster} />
              </Link>
            ))}
          </>
        ) : null}

      </S.CardContainer>
    </>
  );
}

export default Home;