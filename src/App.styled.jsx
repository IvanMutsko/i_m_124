import styled from 'styled-components';

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background-color: #415041f1;
`;

export const Container = styled.div`
  display: flex;
  flex: 1 1 0%;
  height: 100%;

  align-items: stretch;

  background-color: #415041;

  @media screen and (max-width: 1023px) {
    flex-direction: column;
  }
`;
