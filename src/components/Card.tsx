import styled from "styled-components"
import CardImage from "./CardImage"
import CardTitle from "./CardTitle"
import CardDescription from "./CardDescription"
import { TypeTheme } from "../theme/GlobalTheme"
import CardStatus from "./CardStatus"
import CardCredits from "./CardCredits"

const CardContainer = styled.main`
  width: 280px;
  padding: 15px;
  border-radius: 10px;
  animation-name: showCard;
  animation-duration: 350ms;
  animation-fill-mode: forwards;
  animation-timing-function: ease-out;
  background-color: ${({theme: { colors }}: TypeTheme) => colors.cardbg};

  @keyframes showCard {
   0% {
    opacity: 0;
    transform: translateX(50px) scale(0.8);
   }

   100% {
    opacity: 1;
    transform: translateX(0) scale(1);
   }
  }
`

function Card() {
  return (
    <CardContainer>
      <CardImage />
      <CardTitle />
      <CardDescription />
      <CardStatus />
      <CardCredits />
    </CardContainer>
  )
}

export default Card
