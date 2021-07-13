import React from 'react'
import styled from 'styled-components'

const BannerStyled = styled.div`
  background: #08054c;
  font-size: 2rem;
  padding: 1rem;
  color: white;
  margin-block-start: 20px;
  block-size: 130px;
  box-sizing: border-box;
  padding-inline-start: 300px;
  font-family: "Montserrat";
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(to right,  #040125 0%, #0b0d78 40%, #0b0d77 50%);

  &::before {
    content: '';
    inline-size: 300px;
    display: block;
    block-size: 150px;
    position: absolute;
    top: 0;
    left: 0;
    background-size: cover;
    background-image: url('images/wallpaper.jpg');
    clip-path: polygon(0 0, 100% 0, 70% 100%, 0 100%);
  }
  p {
    margin: 0;
    white-space: nowrap;
  }
  .url {
    font-size: .8em;
    text-decoration: underline;
  }
  .copy {
    font-weight: bold;
    /* animation: 3s news infinite; */
  }
  /* @keyframes news {
    to {
      transform: translate(100px);
    }
  } */
`

function Banner({ copy, url }) {
  return (
    <BannerStyled>
      <p className="copy">{copy}</p>
      <p className="url">{url}</p>
    </BannerStyled>
  )
}

export default Banner
