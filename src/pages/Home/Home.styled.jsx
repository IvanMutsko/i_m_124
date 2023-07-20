import styled from 'styled-components';
import img from '../../img/mountains.jpg';

export const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;

  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;

  color: #ffffff99;
  font-size: 36px;
`;

export const TextBlock = styled.div`
  margin-top: auto;
  padding: 40px;
  background-color: #5965597e;
`;

export const Greeting = styled.p`
  text-align: center;

  margin: 0;
  padding: 5px;
`;

export const Name = styled.h1`
  text-align: center;
  font-size: 52px;

  margin: 0;
  padding: 5px;
`;

export const Position = styled.p`
  text-align: center;

  margin: 0;
  padding: 5px;
`;

export const ImgContainer = styled.div`
  margin-top: auto;
`;

export const Image = styled.img`
  display: block;
  max-width: 430px;
`;
