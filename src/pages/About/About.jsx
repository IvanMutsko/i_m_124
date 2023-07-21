import {
  Container,
  MainTitle,
  TextAbout,
  Title,
  Subtitle,
  Text,
  List,
  Item,
} from './About.styled';

export default function Home() {
  return (
    <Container>
      <MainTitle>About me</MainTitle>
      <TextAbout>
        I am a Junior Front End developer with knowledge of HTML, CSS,
        JavaScript and React. I like to learn new things, solve interesting
        problems and find the best solutions. Because of this, I devote a lot of
        time and attention to improving my knowledge and practical skills.
      </TextAbout>
      <Title>Education</Title>
      <Subtitle>IT School GoIT 2022-2023</Subtitle>
      <Text>Fullstack Developer</Text>
      <Subtitle>Priazov State Technical University 2015-2018</Subtitle>
      <Text>Bachelor's degree with honors in Transport technologies</Text>
      <Subtitle>Mariupol Construction College 2011-2015</Subtitle>
      <Text>
        Associate Degree with honors in Repair and maintenance of cars and
        engines
      </Text>
      <Title>Work experience</Title>
      <Subtitle>LLC "Retail-Ukraine" Logistics manager 2021-Present</Subtitle>
      <List>
        <Item>search for transport and attracting new carriers </Item>
        <Item>conducting negotiations and signing contracts</Item>
        <Item>development and implementation of new projects</Item>
        <Item>prompt resolution of problem situations</Item>
        <Item>conducting analytical work to reduce costs</Item>
      </List>
      <Text>
        Achievements: reduced transport costs, introduced GPS transport
        monitoring, redesigned and expanded the functionality of monitoring
        transport indicators.
      </Text>
      <Subtitle>
        LLC "Retail-Ukraine" Controller of food products 2020-2020
      </Subtitle>
      <List>
        <Item>quality control of product selection</Item>

        <Item>detection and elimination of selection errors</Item>
        <Item>documentation management</Item>
      </List>
      <Text>
        Achievements: optimized the product search process and reduced the
        percentage of errors. Got a promotion.
      </Text>
    </Container>
  );
}
