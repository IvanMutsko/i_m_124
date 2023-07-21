import { Container, Title, List, Item } from './Skills.styled';
import html from '../../img/icons/html.svg';
import css from '../../img/icons/css.svg';
import sass from '../../img/icons/sass.svg';
import js from '../../img/icons/js.svg';
import react from '../../img/icons/react.svg';
import nodejs from '../../img/icons/nodejs.svg';
import mongodb from '../../img/icons/mongodb.svg';
import git from '../../img/icons/git.svg';
import figma from '../../img/icons/figma.svg';

export default function Skills() {
  return (
    <Container>
      <div>
        <Title>TECH SKILLS</Title>
        <List>
          <Item>HTML/CSS/SASS</Item>
          <Item>JavaScript</Item>
          <Item>React</Item>
          <Item>NodeJS</Item>
          <Item>MongoDB</Item>
          <Item>REST API</Item>
          <Item>GIT</Item>
          <Item>Parcel/Webpack</Item>
          <Item>Figma</Item>
        </List>
        <Title>SOFT SKILLS</Title>
        <List>
          <Item>Communicative</Item>
          <Item>Team work</Item>
          <Item>Attention to detail</Item>
          <Item>High analytics skills</Item>
          <Item>Problem Solving</Item>
        </List>
      </div>
      <div>
        <img src={html} alt="g" />
        <img src={css} alt="g" />
        <img src={sass} alt="g" />
        <img src={js} alt="g" />
        <img src={react} alt="g" />
        <img src={nodejs} alt="g" />
        <img src={mongodb} alt="g" />
        <img src={git} alt="g" />
        <img src={figma} alt="g" />
      </div>
    </Container>
  );
}
