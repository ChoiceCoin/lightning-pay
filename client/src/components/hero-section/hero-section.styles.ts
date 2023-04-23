// import styled from styled components
import styled from "styled-components";

// hero section container styles
export const HeroSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: white;

//   @media screen and (max-width : 1040px) {
//     margin-top : 3rem;
//   }
`;

// transactions container styles
export const TransactionsContainer = styled.div`
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color:  #002846;
  margin: 2rem 0rem 0rem 0rem;
`;

// transactions text styles
export const TransactionsText = styled.span`
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  font-family: "Space Grotesk";
  font-style: normal;
  font-weight: 700;

  .coloredText {
    background: linear-gradient(180deg, #FFDA00 0%, #FF8300 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  @media only screen and (max-width: 520px) {
    font-size: 0.9rem;
  }

  @media only screen and (max-width: 406px) {
    font-size: 0.8rem;
  }
  @media only screen and (max-width: 368px) {
    font-size: 0.7rem;
  }
`;

// images container styles
export const ImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 50rem;
  margin: 4rem auto;

  @media screen and (max-width : 870px) and (min-width : 666px) {
    width : 40rem;
  }
  @media screen and (max-width : 666px) and (min-width : 593px) {
   width : 35rem;
  }
  @media screen and (max-width: 593px) {
    width : 30rem;
  }
  @media screen and (max-width: 500px) {
    width: 300px;
    flex-wrap: wrap;
  }
`;

// image styles
export const Image = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  span {
    display: flex;
    position: absolute;
    font-family: "Space Grotesk";
    font-style: normal;
    font-weight: 700;
    bottom: 1rem;
    left: 2rem;
  }
`;
// hero image styles
export const HeroImage = styled.div`
  width: 100%;
  margin-top: -60px;
  margin-bottom: 5rem;
  img {
    width: 100%;
  }
`;
