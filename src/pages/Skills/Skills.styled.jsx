import styled from 'styled-components';
import img from '../../img/backgrounds/keyboard-bg.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  background-image: linear-gradient(
      to right,
      rgba(41, 46, 41, 0.9),
      rgba(41, 46, 41, 0.9)
    ),
    url(${img});

  color: #b4b4b4;
`;

export const SubContainer = styled.div`
  display: flex;
  gap: 80px;
  margin-bottom: 60px;

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const Title = styled.h2`
  font-size: 40px;
  margin-bottom: 20px;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Item = styled.li`
  font-size: 18px;

  &::before {
    content: '►';
    margin-right: 8px;
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  gap: 30px;
  padding: 0 40px;
`;

export const Icon = styled.img`
  height: 100px;

  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.2);
  }
`;
