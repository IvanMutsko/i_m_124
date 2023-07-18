import { Container, Greeting, Name, Position } from './Home.styled';
import photo from '../../img/photo.png';

export default function Home() {
  return (
    <Container>
      <div>
        <Greeting>Hi, I am</Greeting>
        <Name>Ivan Mutsko</Name>
        <Position>Front-end Developer</Position>
      </div>
      <div>
        <img src={photo} alt="Photo Ivan Mutsko" width={400} />
      </div>
    </Container>
  );
}
