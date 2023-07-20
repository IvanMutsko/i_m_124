import styled from 'styled-components';
import img from '../../img/black-desk.jpg';

export const Container = styled.div`
  width: 100%;
  padding: 40px;

  background-image: linear-gradient(
      to right,
      rgba(89, 101, 89, 0.4),
      rgba(89, 101, 89, 0.4)
    ),
    url(${img});
  background-size: cover;
  background-repeat: no-repeat;

  color: #ffffffb1;
`;



export const MainTitle = styled.h2``;

export const TextAbout = styled.p``;

export const EducationTitle = styled.h3``;

export const EducationText = styled.p``;

export const ExperienceTitle = styled.h3``;

export const ExperienceSubtitle = styled.h4``;

export const ExperienceText = styled.p``;

export const DutiesList = styled.ul``;

export const DutyItem = styled.li``;
