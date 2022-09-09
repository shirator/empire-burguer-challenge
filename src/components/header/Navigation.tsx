import logo from "../../assets/logo.svg";
import Dropdown from "./Dropdown";
import { NavigationContainer } from "./styles";

const Navigation = () => {
  return (
    <NavigationContainer>
      <img src={logo} alt="Logo" />
      <Dropdown />
    </NavigationContainer>
  );
};

export default Navigation;
