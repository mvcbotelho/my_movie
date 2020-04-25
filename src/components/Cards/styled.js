import styled from 'styled-components'

export const Card = styled.div`
background: #fff;
width: 350px;
margin-bottom: 25px;
border-radius: 5px;
box-shadow: 3px 3px 5px #A9A9A9;

display: grid;

grid-template-columns: 1fr 3fr;
` 
export const CardHeader = styled.div`
padding: 5px;
` 

export const CardBody = styled.div`
padding: 5px;
` 

export const Poster = styled.img`
width: 80px;
margin-top: 4px;
`

export const Title = styled.p`
font-size: 1.2em;
font-weight: bold;
color: #000;
`
export const InfoMovie = styled.p`
font-size: 0.9em;
font-weight: lighter;
color: #696969;
`