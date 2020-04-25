import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  justify-content: center;
`
export const CardContainer = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 20px auto;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`

export const SearchWrapper = styled.section`
  width: 350px;
  margin-top: 30px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  h1 {
  color: #FF8C00;
  font-size: 1.65em;
  margin: auto;

  }
`

export const InputWrapper = styled.div`
width: 100%;
margin-top: 15px;
`

export const Input = styled.input`
width:100%;
height: 50px;
padding: 6px;
border-radius: 5px;
border: none;
display: block;
`

export const ButtonSearch = styled.button`
width:100%;
background: #FF8C00;
height: 30px;
border-radius: 5px;
border: none;
margin-top: 10px;
display: block;

&:hover {
background: #FF4500;
}
`



export const LoadingWrapper = styled.div`
margin: 30px auto;
grid-column-start: 1;
grid-column-end: 4;
`
