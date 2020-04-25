import React from 'react'
import * as S from './styled'

function Cards({ title, year, poster }) {

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
    </S.Card>
  )
}

export default Cards

// listagem de filmes apenas a foto, o título, o ano de lançamento, gênero, nota imdb e a descrição dos filmes