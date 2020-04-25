import React, { useState } from 'react'
import * as S from './styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons'

function Cards({ title, year, poster, imdbID }) {
  const [liked, setLiked] = useState(false)
  return (
    <S.Card>
      <S.CardHeader>
        <S.Poster src={poster} alt='Poster' />
      </S.CardHeader>
      <S.CardBody>
        <S.Title>{title}</S.Title>
        <S.InfoMovie>{year}</S.InfoMovie>
        <S.InfoMovie>Genero</S.InfoMovie>
        <S.InfoMovie>Nota</S.InfoMovie>
        <S.InfoMovie>Descrição</S.InfoMovie>
      </S.CardBody>
      <S.CardInfo>
        <S.LinkTo to={`/detalhes/${imdbID}`}>Ver +</S.LinkTo>
        {liked ?
          <FontAwesomeIcon
            onClick={() => setLiked(!liked)}
            color='red'
            size='2x'
            icon={solidHeart}
          /> :
          <FontAwesomeIcon
            onClick={() => setLiked(!liked)}
            color='#1c1c1c'
            size='2x'
            icon={regularHeart}
          />
        }
      </S.CardInfo>
    </S.Card>
  )
}

export default Cards

// listagem de filmes apenas a foto, o título, o ano de lançamento, gênero, nota imdb e a descrição dos filmes