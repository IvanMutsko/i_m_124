import { Container } from './Footer.styled';

export const Footer = () => {
  const copyright = String.fromCodePoint(0x00a9);

  return (
    <Container>
      Created by Ivan Mutsko. {copyright} 2023. All rights reserved.
    </Container>
  );
};


