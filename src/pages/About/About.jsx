import {
  Container,
  MainTitle,
  TextAbout,
  EducationTitle,
  EducationText,
  ExperienceTitle,
  ExperienceSubtitle,
  ExperienceText,
  DutiesList,
  DutyItem,
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

      <EducationTitle>Education</EducationTitle>
      <EducationText>
        IT School GoIT 2022-2023 Fullstack Developer Priazov State Technical
        University 2015-2018 Bachelor's degree with honors in Transport
        technologies Mariupol Construction College 2011-2015 Associate Degree
        with honors in Repair and maintenance of cars and engines
      </EducationText>
      <ExperienceTitle>Work experience</ExperienceTitle>
      <ExperienceSubtitle>
        LLC "Retail-Ukraine" Logistics manager 2021-Present
      </ExperienceSubtitle>
      <DutiesList>
        <DutyItem>search for transport and attracting new carriers </DutyItem>
        <DutyItem>conducting negotiations and signing contracts</DutyItem>
        <DutyItem>development and implementation of new projects</DutyItem>
        <DutyItem>prompt resolution of problem situations</DutyItem>
        <DutyItem>conducting analytical work to reduce costs</DutyItem>
      </DutiesList>
      <ExperienceText>
        Achievements: reduced transport costs, introduced GPS transport
        monitoring, redesigned and expanded the functionality of monitoring
        transport indicators.
      </ExperienceText>

      <ExperienceSubtitle>
        LLC "Retail-Ukraine" Controller of food products 2020-2020
      </ExperienceSubtitle>
      <DutiesList>
        <DutyItem>quality control of product selection</DutyItem>

        <DutyItem>detection and elimination of selection errors</DutyItem>
        <DutyItem>documentation management</DutyItem>
      </DutiesList>

      <ExperienceText>
        Achievements: optimized the product search process and reduced the
        percentage of errors. Got a promotion.
      </ExperienceText>
    </Container>
  );
}
