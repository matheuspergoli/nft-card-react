import styled from "styled-components"
import { TypeTheme } from "../theme/GlobalTheme"

const Title = styled.h1`
  cursor: pointer;
  font-size: 25px;
  font-weight: 500;
  margin: 15px 0 15px 0;
  color: ${({theme: { colors }}: TypeTheme) => colors.white};

  &:hover {
    color: ${({theme: { colors }}: TypeTheme) => colors.cyan};
  }
`

function CardTitle() {
  return (
    <Title>Equilibrium #3429</Title>
  )
}

export default CardTitle
