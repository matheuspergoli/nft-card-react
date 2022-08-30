import styled from "styled-components"
import { TypeTheme } from "../theme/GlobalTheme"

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({theme: { colors }}: TypeTheme) => colors.softBlue};
`

const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 20px;
  color: ${({theme: { colors }}: TypeTheme) => colors.cyan};
`

const DaysLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 20px;
  color: ${({theme: { colors }}: TypeTheme) => colors.softBlue};
`

function CardStatus() {
  return (
    <Container>
      <Price>
        <img src="../src/images/icon-ethereum.svg" />
        0.041 ETH
      </Price>
      <DaysLeft>
        <img src="../src/images/icon-clock.svg" />
        3 days left
      </DaysLeft>
    </Container>
  )
}

export default CardStatus
