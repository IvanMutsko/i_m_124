import {
  Container,
  Title,
  List,
  Item,
  SubContainer,
  IconsContainer,
  Icon,
} from './Skills.styled';
import { techSkills } from '../../data/techSkills';
import { softSkills } from '../../data/softSkills';
import { iconsArray } from '../../data/iconsArray';

export default function Skills() {
  return (
    <Container>
      <SubContainer>
        <div>
          <Title>TECH SKILLS</Title>
          <List>
            {techSkills.map(skill => (
              <Item key={skill}>{skill}</Item>
            ))}
          </List>
        </div>
        <div>
          <Title>SOFT SKILLS</Title>
          <List>
            {softSkills.map(skill => (
              <Item key={skill}>{skill}</Item>
            ))}
          </List>
        </div>
      </SubContainer>
      <IconsContainer>
        {iconsArray.map(icon => (
          <Icon key={icon.name} src={icon.icon} alt={icon.name} />
        ))}
      </IconsContainer>
    </Container>
  );
}
