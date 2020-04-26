import React from 'react'
import * as S from './styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
//import { faImbd } from '@fortawesome/free-regular-svg-icons'
import { faStar, faAward } from '@fortawesome/free-solid-svg-icons'

function Details() {

  return (
    <S.Container>
      <S.Header>
        <h1>Titulo</h1>
      </S.Header>
      <S.WrapperDetails>
        <div>
        <S.BorderImage>
          <img src='https://via.placeholder.com/150' />
        </S.BorderImage>
          <S.WrapperIcons>
            <S.IconsDetails>
              <FontAwesomeIcon icon={faStar} size='3x' color="gold" />
              <S.IconTitle>Nota imdb</S.IconTitle>
              <p>8,2/10</p>
            </S.IconsDetails>
            <S.IconsDetails>
              <FontAwesomeIcon icon={faAward} size='3x' color="gold" />
              <S.IconTitle>premiações</S.IconTitle>
              <p>3 oscar</p>
              <p>3 Globo de ouro</p>
            </S.IconsDetails>
          </S.WrapperIcons>
        </div>
        <S.WrapperInfos>
          <S.InfoTitle>Ano de lançamento</S.InfoTitle>
          <S.Information>Ano de lançamento</S.Information>
          <S.InfoTitle>Gênero</S.InfoTitle>
          <S.Information>Gênero</S.Information>
          <S.InfoTitle>Lingua original</S.InfoTitle>
          <S.Information>Lingua original</S.Information>
          <S.InfoTitle>Direção</S.InfoTitle>
          <S.Information>Direção</S.Information>
          <S.InfoTitle>Elenco</S.InfoTitle>
          <S.Information>Elenco</S.Information>
          <S.InfoTitle>Descrição</S.InfoTitle>
          <S.Information>Descrição</S.Information>
        </S.WrapperInfos>
      </S.WrapperDetails>
    </S.Container>
  )
}

export default Details
