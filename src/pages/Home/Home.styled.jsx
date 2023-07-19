import styled from 'styled-components';
import img from '../../img/mountains.jpg';

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TextBlock = styled.div`
  margin-right: 150px;
`;

export const Greeting = styled.p`
  color: #1f2f2f;
  text-align: center;
`;

export const Name = styled.h1`
  color: #1f2f2f;
  text-align: center;
  font-size: 48px;
`;

export const Position = styled.p`
  color: #1f2f2f;
  text-align: center;
`;

export const Image = styled.img`
  max-width: 400px;
`;
