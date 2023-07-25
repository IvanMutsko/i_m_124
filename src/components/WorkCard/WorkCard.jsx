import { useState } from 'react';
import {
  CardContainer,
  CardImage,
  CardContent,
  CardTitle,
  CardTechnologies,
  CardDescription,
  WorkLink,
  LinkWrap,
  CardOverlay,
} from './WorkCard.styled';

export const WorkCard = ({
  image,
  title,
  technologies,
  description,
  github,
  liveLink,
}) => {
  const [showDescription, setShowDescription] = useState(0);

  const handleMouseEnter = () => {
    setShowDescription(1);
  };

  const handleMouseLeave = () => {
    setShowDescription(0);
  };

  return (
    <CardContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <CardImage src={image} alt={title} />
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardTechnologies>{technologies}</CardTechnologies>
      </CardContent>
      <CardOverlay $show={showDescription}>
        <CardDescription>{description}</CardDescription>
        <LinkWrap>
          <WorkLink href={github} target="_blank" rel="noopener noreferrer">
            GitHub
          </WorkLink>
          <WorkLink href={liveLink} target="_blank" rel="noopener noreferrer">
            Live
          </WorkLink>
        </LinkWrap>
      </CardOverlay>
    </CardContainer>
  );
};
