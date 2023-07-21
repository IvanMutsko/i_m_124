import styled from 'styled-components';

export const DropdownContainer = styled.div`
  position: relative;
`;

export const DropBtn = styled.button`
  width: 100%;
  height: 40px;

  background-color: #ffffff42;
  color: #ffffff99;
  border: none;
  font-size: 20px;
  letter-spacing: 0.2rem;
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
`;
