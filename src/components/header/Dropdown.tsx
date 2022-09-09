import { IoReorderThreeSharp } from "react-icons/io5";
import { Link } from "react-router-dom";
import { DropdownContainer } from "./styles";
import { useState } from "react";

const Dropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <DropdownContainer show={showDropdown}>
      <IoReorderThreeSharp onClick={toggleDropdown} />
      <ul className="dropdown__content">
        <li className="dropdown__content__item">
          <Link to="">Home</Link>
        </li>
        <li className="dropdown__content__item">
          <Link to="">Promoção</Link>
        </li>
        <li className="dropdown__content__item">
          <Link to="">Cardápio</Link>
        </li>
        <li className="dropdown__content__item">
          <Link to="">Comentários</Link>
        </li>
        <li className="dropdown__content__item">
          <Link to="">Contato</Link>
        </li>
      </ul>
    </DropdownContainer>
  );
};

export default Dropdown;
