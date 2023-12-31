import styled from 'styled-components';
import img from '../../img/backgrounds/about-bg.jpg';

export const Container = styled.div`
  padding: 40px;

  background-image: linear-gradient(
      to right,
      rgba(41, 46, 41, 0.7),
      rgba(41, 46, 41, 0.7)
    ),
    url(${img});
  background-size: cover;
  background-repeat: no-repeat;

  color: #b4b4b4;
`;

export const Download = styled.a`
  display: inline-flex;
  font-size: 30px;
  text-decoration: none;
  color: #ffffff99;

  border: 2px solid #ffffff99;
  border-radius: 5px;
  padding: 10px 30px;
  margin-bottom: 30px;

  transition: background-color 250ms ease-out;

  &:hover,
  &:focus {
    background-color: #ffffff42;
  }
`;

export const MainTitle = styled.h2`
  font-size: 34px;
  margin-bottom: 20px;
`;

export const TextAbout = styled.p`
  font-size: 24px;
  margin-bottom: 30px;
`;

export const Title = styled.h3`
  font-size: 30px;
  margin-bottom: 10px;
`;

export const Subtitle = styled.h4`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  margin-bottom: 24px;
`;

export const List = styled.ul`
  margin-left: 30px;
  margin-bottom: 10px;
`;

export const Item = styled.li`
  margin-bottom: 5px;

  &::before {
    content: '►';
    margin-right: 8px;
  }
`;
