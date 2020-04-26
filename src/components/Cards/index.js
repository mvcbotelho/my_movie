import React, { useState } from 'react';
import * as S from './styled';
import api from '../../services/api';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';

function Cards({ title, year, poster, imdbID, genre, imdbRating, plot, like }) {
  const [liked, setLiked] = useState(false);

  const reduceString = (str, range) => {
    if (str.length > range) {
      return (str = `${str.substr(-10000, range)}...`);
    } else {
      return str;
    }
  };

  const likedMovie = id => {
    api
      .post(`/${id}/like`, null)
      .then(res => setLiked(true))
      .catch(error => console.log(error));
  };

  return (
    <S.Card>
      <S.CardHeader>
        <S.Poster src={poster} alt="Poster" />
      </S.CardHeader>
      <S.CardBody>
        <S.Title>{reduceString(title, 25)}</S.Title>
        <S.InfoMovie>{year}</S.InfoMovie>
        <S.InfoMovie>{reduceString(genre, 25)}</S.InfoMovie>
        <S.InfoMovie>Nota no iMDB {imdbRating}</S.InfoMovie>
        <S.InfoMovie>{reduceString(plot, 85)}</S.InfoMovie>
      </S.CardBody>
      <S.CardInfo>
        <S.LinkTo to={`/detalhes/${imdbID}`}>Ver +</S.LinkTo>
        {liked || like ? (
          <FontAwesomeIcon
            onClick={() => setLiked(!liked)}
            color="red"
            size="2x"
            icon={solidHeart}
          />
        ) : (
          <FontAwesomeIcon
            onClick={() => {
              likedMovie(imdbID);
            }}
            color="#1c1c1c"
            size="2x"
            icon={regularHeart}
          />
        )}
      </S.CardInfo>
    </S.Card>
  );
}

export default Cards;
