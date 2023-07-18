import { NavigateLink, List, Item } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <List>
        <Item>
          <NavigateLink to="/">Home</NavigateLink>
        </Item>
        <Item>
          <NavigateLink to="/about">About me</NavigateLink>
        </Item>
        <Item>
          <NavigateLink to="/skills">Skills</NavigateLink>
        </Item>
        <Item>
          <NavigateLink to="/portfolio">Portfolio</NavigateLink>
        </Item>
      </List>
    </nav>
  );
};
