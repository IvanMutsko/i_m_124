import { Container, NavigateLink, List, Item } from './Navigation.styled';

export const Navigation = ({ onClick }) => {
  return (
    <Container>
      <nav>
        <List>
          <Item>
            <NavigateLink to="/" onClick={() => onClick(false)}>
              Home
            </NavigateLink>
          </Item>
          <Item>
            <NavigateLink to="/about" onClick={() => onClick(false)}>
              About me
            </NavigateLink>
          </Item>
          <Item>
            <NavigateLink to="/skills" onClick={() => onClick(false)}>
              Skills
            </NavigateLink>
          </Item>
          <Item>
            <NavigateLink to="/portfolio" onClick={() => onClick(false)}>
              Portfolio
            </NavigateLink>
          </Item>
        </List>
      </nav>
    </Container>
  );
};
