import styled from "styled-components"
import { TypeTheme } from "../theme/GlobalTheme"

const Container = styled.section`
  display: flex;
  align-items: center;
  gap: 10px;
`

const PerfilImage = styled.figure`
  width: 45px;
  height: 45px;
  border-radius: 50%;
  border: 1px solid ${({theme: { colors }}: TypeTheme) => colors.white};

  img {
    max-width: 100%;
  }
`

const Credits = styled.p`
  color: ${({theme: { colors }}: TypeTheme) => colors.softBlue};
  
  span {
    cursor: pointer;
    color: ${({theme: { colors }}: TypeTheme) => colors.white};
    
    &:hover {
      color: ${({theme: { colors }}: TypeTheme) => colors.cyan};
    }
  }
`

function CardCredits() {
  return (
    <Container>
      <PerfilImage>
        <img src="src/images/image-avatar.png" />
      </PerfilImage>
      <Credits>
        Creation of <span>Jules Wyvern</span>
      </Credits>
    </Container>
  )
}

export default CardCredits
