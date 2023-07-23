import { styled } from 'styled-components';
import img from '../../img/backgrounds/keyboard-bg.jpg';

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  padding: 40px;

  background-image: linear-gradient(
      to right,
      rgba(41, 46, 41, 0.9),
      rgba(41, 46, 41, 0.9)
    ),
    url(${img});

  color: #b4b4b4;
`;
