import React, { useState } from 'react';
import * as S from './styled'
import axios from 'axios'

import BounceLoader from "react-spinners/BounceLoader";

import Cards from '../../components/Cards'

function Home() {
  const [movieName, setMovieName] = useState('')
  const [movies, setMovies] = useState('')
  const [loading, setLoading] = useState(false)

  function handleKeyUp(e) {
    const titleFormated = movieName.split(' ').join('+')
    const keyCode = e.which || e.keyCode;
    if (keyCode === 13) {
      setLoading(true)
      setTimeout(() => {
        return axios
          .get(`http://www.omdbapi.com/?s=${titleFormated}&apikey=8568b783&type=movie`)
          .then(res => setMovies(res.data.Search))
          .catch(error => console.log(error))
          .finally(() => setLoading(false));

      }, 1500)
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
        {loading &&
          (
            <S.LoadingWrapper>
              <BounceLoader
                size={150}
                color={"#FF8C00"}
                loading={loading}
              />
            </S.LoadingWrapper>
          )}
        {movies && (
          <>
            {movies.map(movie => (
              <Cards
                key={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                poster={movie.Poster}
                imdbID={movie.imdbID}
              />
            ))}
          </>
        )
        }
      </S.CardContainer>
    </>
  );
}

export default Home;