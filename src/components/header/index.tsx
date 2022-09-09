import Navigation from "./Navigation";
import { HeaderContainer, MainContainer } from "./styles";
import king_burguer from "../../assets/king_burguer.png";

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation />
      <MainContainer>
        <p>Uma nova experiência!</p>
        <img src={king_burguer} alt="king burguer" />
        <p className="text">
          Para quem tem um{" "}
          <span className="text__span">Apetite de um REI!</span>
        </p>
        <button>Comprar agora</button>
      </MainContainer>
    </HeaderContainer>
  );
};

export default Header;
