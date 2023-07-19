import {
  Container,
  Greeting,
  Name,
  Position,
  Image,
  TextBlock,
} from './Home.styled';
import photo from '../../img/photo.png';

export default function Home() {
  return (
    <Container>
      <TextBlock>
        <Greeting>Hi, I am</Greeting>
        <Name>Ivan Mutsko</Name>
        <Position>Front-end Developer</Position>
      </TextBlock>
      <div>
        <Image src={photo} alt="Photo Ivan Mutsko" />
      </div>
    </Container>
  );
}
