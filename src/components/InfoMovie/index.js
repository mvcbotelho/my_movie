import React from 'react'
import * as S from './styled'

function InfoMovie({title, description}) {
  return (
    <>
      <S.InfoTitle>{title}</S.InfoTitle>
      <S.InfoDescription>{description}</S.InfoDescription>
    </>
  )
}

export default InfoMovie