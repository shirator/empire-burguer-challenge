import styled, { keyframes } from "styled-components";
import { fadeIn } from "react-animations";
import banner_mobile from "../../assets/banner_mobile1.png";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${banner_mobile});
  background-size: cover;
  background-position: center center;
  height: 100vh;
`;

export const NavigationContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 20px;
  background: rgba(59, 32, 11, 0.05);
  backdrop-filter: blur(10px);

  img {
    width: 200px;
  }
`;

const fadeInAnimation = keyframes`${fadeIn}`;

export const DropdownContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;

  svg {
    height: 30px;
    width: 30px;

    background: rgba(29, 6, 5, 0.15);
    border-radius: 3px;
  }

  .dropdown__content {
    animation: 0.5s ${fadeInAnimation};
    display: ${(props: { show: boolean }) => (props.show ? "flex" : "none")};
    flex-direction: column;
    gap: 5px;
    text-align: right;
    position: absolute;
    top: 70px;
    right: 10px;
    background: rgba(29, 6, 5, 0.45);
    border-radius: 5px;
    padding: 10px;
    z-index: 1;

    a {
      color: #fff;
      text-decoration: none;
      text-transform: uppercase;
    }
  }
`;

export const MainContainer = styled.main`
  padding-top: 50px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    font-weight: bold;
  }

  img {
    width: 230px;
  }

  .text {
    font-weight: 300;
    font-size: 12px;

    .text__span {
      font-weight: bold;
      background: #f59a1b;
      padding: 3px;
      border-radius: 5px;
    }
  }

  button {
    width: fit-content;
    padding: 10px;
    background: #f43127;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 5px;
  }
`;
