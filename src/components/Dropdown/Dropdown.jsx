import { useState } from 'react';
import { DropdownContainer, DropBtn, DropdownContent } from './Dropdown.styled';

export const Dropdown = ({ title, children }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <DropdownContainer className={open ? 'open' : ''}>
      <DropBtn onClick={handleOpen}>{title}</DropBtn>
      <DropdownContent open={open}>{children}</DropdownContent>
    </DropdownContainer>
  );
};
