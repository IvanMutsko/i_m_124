import { Container } from './Portfolio.styled';
import { WorkCard } from '../../components/WorkCard/WorkCard';
import { worksForPortfolio } from '../../data/worksForPortfolio';

export default function Portfolio() {
  return (
    <Container>
      {worksForPortfolio.map(work => {
        return <WorkCard key={work.liveLink} {...work} />;
      })}
    </Container>
  );
}
