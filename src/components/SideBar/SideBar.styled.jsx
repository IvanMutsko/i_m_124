import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 1023px) {
    position: relative;
  }
`;

export const Bar = styled.aside`
  min-width: 280px;
  background-color: #596559;

  font-size: 24px;
  color: #ffffff;

  @media (max-width: 1023px) {
    display: none;
  }
`;

export const BurgerBtn = styled.button`
  display: none;
  @media (max-width: 1023px) {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;

    background-color: #ffffff42;
    color: #ffffff99;
    border: none;
    font-size: 40px;

    transition: background-color 250ms linear;

    &:hover {
      background-color: #ffffff89;
    }
  }
`;

export const BurgerMenu = styled.div`
  @media (max-width: 1023px) {
    position: absolute;
    width: 100%;
    top: 100%;
    left: 0;

    z-index: 10;
  }
`;
