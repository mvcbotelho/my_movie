import React, { useState, useEffect } from 'react';
import * as S from './styled';
import InfoMovie from '../../components/InfoMovie';
import api from '../../services/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faAward } from '@fortawesome/free-solid-svg-icons';
import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';

function Details(props) {
  const [movie, setMovie] = useState('');
  useEffect(() => {
    api
      .get(`/${props.match.params.id}`)
      .then(res => setMovie(res.data))
      .catch(error => console.log(error))
      .finally();
  }, []);
  return (
    <S.Container>
      <S.Header>
        <h1>{movie.Title}</h1>
      </S.Header>
      <S.WrapperDetails>
        <div>
          <S.BorderImage>
            <img src={movie.Poster} />
          </S.BorderImage>
          <S.WrapperIcons>
            <S.IconsDetails>
              <FontAwesomeIcon icon={faStar} size="3x" color="gold" />
              <S.IconTitle>Nota imdb</S.IconTitle>
              <p>{movie.imdbRating}</p>
            </S.IconsDetails>
            <S.IconsDetails>
              <FontAwesomeIcon icon={faAward} size="3x" color="gold" />
              <S.IconTitle>Premiações</S.IconTitle>
              <p>{movie.Awards}</p>
            </S.IconsDetails>
          </S.WrapperIcons>
        </div>
        <S.WrapperInfos>
          <InfoMovie title="Ano de lançamento" description={movie.Year} />
          <InfoMovie title="Gênero" description={movie.Genre} />
          <InfoMovie title="Lingua original" description={movie.Language} />
          <InfoMovie title="Direção" description={movie.Director} />
          <InfoMovie title="Elenco" description={movie.Actors} />
          <InfoMovie title="Descrição" description={movie.Plot} />
        </S.WrapperInfos>
        <S.LinkTo to="/">
          <FontAwesomeIcon icon={faTimesCircle} size="3x" color="1c1c1c" />
        </S.LinkTo>
      </S.WrapperDetails>
    </S.Container>
  );
}

export default Details;
