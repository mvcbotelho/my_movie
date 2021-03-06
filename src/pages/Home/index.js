import React, { useState, useEffect } from 'react';
import * as S from './styled';
import api from '../../services/api';

import BounceLoader from 'react-spinners/BounceLoader';

import Cards from '../../components/Cards';

function Home() {
  const [movieName, setMovieName] = useState('');
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMensage, setErrorMensage] = useState(false);

  useEffect(() => {
    if (movies) {
      const obj = localStorage.getItem('@my_movie/movies');
      const movieList = JSON.parse(obj);
      setMovies(movieList);
    }
  }, []);

  function handleKeyUp(e) {
    const keyCode = e.which || e.keyCode;
    if (keyCode === 13) {
      setLoading(true);
      localStorage.removeItem('@my_movie/movies');
      setErrorMensage(false);
      setMovies([]);
      api
        .get(`/?title=${movieName}`)
        .then(res => {
          const data = JSON.stringify(res.data);
          localStorage.setItem('@my_movie/movies', data);
          setMovies(res.data);
        })
        .catch(error => setErrorMensage(error))
        .finally(setLoading(false));
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
        {loading && (
          <S.LoadingWrapper>
            <BounceLoader size={150} color={'#FF8C00'} loading={loading} />
          </S.LoadingWrapper>
        )}
        {errorMensage && (
          <S.ErrorMensagem>
            Erro no servidor{' '}
            <span>Tente realizar uma nova busca com outro filme.</span>{' '}
          </S.ErrorMensagem>
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
                genre={movie.Genre}
                imdbRating={movie.imdbRating}
                plot={movie.Plot}
                like={movie.like ? movie.like : null}
              />
            ))}
          </>
        )}
      </S.CardContainer>
    </>
  );
}

export default Home;
