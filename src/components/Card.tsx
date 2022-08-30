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
  background-color: ${({theme: { colors }}: TypeTheme) => colors.cardbg};
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
