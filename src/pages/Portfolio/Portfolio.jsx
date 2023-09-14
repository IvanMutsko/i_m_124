import { Container, List } from './Portfolio.styled';
import { WorkCard } from '../../components/WorkCard/WorkCard';
import { worksForPortfolio } from '../../data/worksForPortfolio';

export default function Portfolio() {
  return (
    <Container>
      <List>
        {worksForPortfolio.map(work => {
          return <WorkCard key={work.liveLink} {...work} />;
        })}
      </List>
    </Container>
  );
}
