import artesanal_icon from "../../assets/artesanal_icon.png";
import atendimento_icon from "../../assets/atendimento_icon.png";
import delivery_icon from "../../assets/delivery_icon.png";
import { InfoContainer } from "./styles";

const InfoSection = () => {
  return (
    <InfoContainer>
      <div className="info-section__container">
        <img src={artesanal_icon} alt="Artesanal" />
        <div className="info-section__container__text">
          <h3>Artesanal</h3>
          <p>Nossas receitas são feitas com todo cuidado</p>
        </div>
      </div>
      <div className="info-section__container">
        <img src={atendimento_icon} alt="Atendimento" />
        <div className="info-section__container__text">
          <h3>Atendimento</h3>
          <p>Totalmente personalizado</p>
        </div>
      </div>
      <div className="info-section__container">
        <img src={delivery_icon} alt="Delivery Speed" />
        <div className="info-section__container__text">
          <h3>Delivery speed</h3>
          <p>Entregamos em menos de 30 minutos</p>
        </div>
      </div>
    </InfoContainer>
  );
};

export default InfoSection;
