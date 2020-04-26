import React from 'react';
import * as S from './styled'
import InfoMovie from '../../components/InfoMovie'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
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
              <S.IconTitle>Premiações</S.IconTitle>
              <p>3 oscar</p>
              <p>3 Globo de ouro</p>
            </S.IconsDetails>
          </S.WrapperIcons>
        </div>
        <S.WrapperInfos>
          <InfoMovie
            title='Ano de lançamento'
            description='2009' />
          <InfoMovie title='Gênero' description='Drama' />
          <InfoMovie title='Lingua original' description='Português' />
          <InfoMovie title='Direção' description='Jãozinho' />
          <InfoMovie title='Elenco' description='Uma galeeeeeeeeera' />
          <InfoMovie title='Descrição' description='Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.' />

        </S.WrapperInfos>
      </S.WrapperDetails>
    </S.Container>
  )
}

export default Details
