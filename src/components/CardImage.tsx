import styled from "styled-components"
import imageEquilibrium from "../images/image-equilibrium.jpg"
import imageView from "../images/icon-view.svg"

const ImageContainer = styled.figure`
  position: relative;
  width: 100%;
  cursor: pointer;

  &::before {
    content: '';
    display: none;
    position: absolute;
    inset: 0;
    border-radius: 10px;
    background-position: center;
    background-repeat: no-repeat;
    background-color: hsla(178, 100%, 50%, 40%);
    background-image: url(${imageView});
  }

  &:hover::before {
    display: block;
  }

  img {
    display: block;
    max-width: 100%;
    border-radius: 10px;
  }
`

function CardImage() {
  return (
    <ImageContainer>
      <img src={imageEquilibrium} />
    </ImageContainer>
  )
}

export default CardImage
