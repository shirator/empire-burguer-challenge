import styled from "styled-components";

export const InfoContainer = styled.div`
  box-shadow: 0px 4px 35px rgba(179, 155, 132, 0.3);
  border-radius: 10px;
  width: 80%;
  gap: 20px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background: #fff;
  padding: 20px;

  position: relative;
  bottom: 100px;

  .info-section__container {
    display: flex;
    gap: 10px;

    h3 {
      font-family: "Lilita One", cursive;
      color: #5c4c4b;
      text-transform: uppercase;
      font-size: 20px;
    }

    p {
      font-weight: 300;
      font-size: 14px;
      max-width: 140px;
    }
  }

  .info-section__container + .info-section__container {
    border-top: 1px solid rgba(73, 46, 21, 0.15);
    padding-top: 15px;
  }
`;
