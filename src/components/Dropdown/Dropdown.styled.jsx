import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;

  @media (max-width: 1023px) {
    background-color: #596559;
    height: 100%;
  }
`;

export const DropBtn = styled.button`
  width: 100%;
  height: 40px;

  background-color: #ffffff42;
  color: #ffffff99;
  border: none;
  font-size: 20px;
  letter-spacing: 0.2rem;

  transition: background-color 250ms linear;

  &:hover {
    background-color: #ffffff89;
  }
`;

export const DropdownContent = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;

  visibility: ${({ open }) => (open ? 'visible' : 'hidden')};
  opacity: ${({ open }) => (open ? '1' : '0')};
  transform: ${({ open }) => (open ? 'translateY(0)' : 'translateY(-20px)')};
  transition: visibility 250ms ease, opacity 250ms ease, transform 250ms ease;

  @media (max-width: 1023px) {
    background-color: #596559;
    height: 250px;
  }
`;
