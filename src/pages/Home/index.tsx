import SeidorLogo from "@assets/images/seidorLogo.png";
import { Container } from "./styles";
export function Home() {
  return (
    <Container>
      <img src={SeidorLogo} alt="Seidor Logo" />
      <div>
        <img />
        <h1>Seidor</h1>
      </div>
    </Container>
  );
}
