import { useState } from 'react';
import { HiMenu } from 'react-icons/hi';
import { Container, Bar, BurgerMenu, BurgerBtn } from './SideBar.styled';
import { Contacts } from '../Contacts/Contacts';
import { Navigation } from '../Navigation/Navigation';

export const SideBar = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleBurgerClick = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <Container>
      <Bar>
        <Navigation />
        <Contacts />
      </Bar>

      <BurgerBtn onClick={handleBurgerClick}>
        <HiMenu />
      </BurgerBtn>

      {isBurgerOpen && (
        <BurgerMenu open={isBurgerOpen}>
          <Navigation onClick={setIsBurgerOpen} />
          <Contacts />
        </BurgerMenu>
      )}
    </Container>
  );
};
