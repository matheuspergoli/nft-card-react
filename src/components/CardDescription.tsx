import styled from "styled-components"
import { TypeTheme } from "../theme/GlobalTheme"

const Description = styled.p`
  font-size: 15px;
  margin-bottom: 15px;
  color: ${({theme: { colors }}: TypeTheme) => colors.softBlue};
`

function CardDescription() {
  return (
    <Description>Our Equilibrium collection promotes balance and calm</Description>
  )
}

export default CardDescription
