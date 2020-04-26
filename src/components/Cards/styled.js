import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Card = styled.div`
  background: #fff;
  width: 350px;
  height: 136px;
  margin: auto;
  border-radius: 5px;
  box-shadow: 3px 3px 5px #a9a9a9;

  display: grid;
  grid-template-columns: 1fr 3fr 1fr;
`;
export const CardHeader = styled.div`
  padding: 5px;
`;

export const CardBody = styled.div`
  padding: 5px;
`;

export const CardInfo = styled.div`
  padding: 5px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const Poster = styled.img`
  max-width: 78px;
  margin-top: 4px;
`;

export const Title = styled.p`
  font-size: 1em;
  font-weight: bold;
  color: #000;
`;
export const InfoMovie = styled.p`
  font-size: 0.8em;
  font-weight: lighter;
  color: #696969;
`;

export const LinkTo = styled(Link)`
  text-decoration: none;
  background: #ff8c00;
  color: #1c1c1c;
  border-radius: 3px;
  padding: 5px 10px;
  font-size: 0.8em;

  box-shadow: 1px 1px 5px #1c1c1c;
`;
