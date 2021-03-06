import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`;

export const Header = styled.div`
  width: 100%;

  h1 {
    margin: 20px 0;
    font-size: 2.8em;
    color: #ff8c00;
  }
`;

export const WrapperDetails = styled.div`
  width: 100%;
  background: #dcdcdc;
  border-radius: 5px;
  padding: 10px;

  display: grid;
  grid-template-columns: 2fr 4fr 60px;
`;
export const BorderImage = styled.div`
  width: 100%;
  height: 450px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 3px 3px 5px #1c1c1c;
  margin: 3px 0 20px 0;
  padding: 20px;

  img {
    border: 1px solid #1c1c1c;
    width: 100%;
    height: 100%;
  }
`;

export const WrapperIcons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const IconsDetails = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  p {
    flex: 1;
    flex-direction: column;
  }
`;

export const IconTitle = styled.p`
  font-size: 0.9em;
  font-weight: bold;
  color: #1c1c1c;
  margin: 5px 0;
`;

export const WrapperInfos = styled.div`
  padding: 20px;
`;

export const LinkTo = styled(Link)`
  color: #1c1c1c;
  font-size: 0.8em;
  padding: 5px 10px;
`;
