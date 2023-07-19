import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import img from '../../img/side-mountains.jpg';

export const Container = styled.div`
  height: 360px;
  background-image: linear-gradient(
      to right,
      rgba(47, 48, 58, 0.4),
      rgba(47, 48, 58, 0.4)
    ),
    url(${img});
  background-size: cover;
  background-repeat: no-repeat;

  letter-spacing: 0.25rem;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  width: 100%;
`;

export const Item = styled.li`
  margin: 0;

  background-color: transparent;
  transition: background-color 250ms ease-out;

  &:hover,
  &:focus {
    background-color: #ffffff42;
  }
`;

export const NavigateLink = styled(NavLink)`
  display: block;

  text-align: left;
  text-decoration: none;
  color: inherit;

  padding: 10px;
  margin: 0;

  cursor: pointer;
`;
