import styled from 'styled-components';

export const ContactList = styled.ul`
  position: absolute;

  width: 100%;
`;

export const ContactItem = styled.li`
  margin: 0;

  background-color: transparent;
  transition: background-color 250ms ease-out;

  &:hover,
  &:focus {
    background-color: #ffffff42;
  }
`;

export const ContactLink = styled.a`
  display: block;

  text-align: left;
  text-decoration: none;
  color: #ffffff99;
  font-size: 18px;
  letter-spacing: 0.1rem;

  padding: 10px;
  margin: 0;
`;
