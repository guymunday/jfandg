import * as React from "react"
import HeroMenu from "./HeroMenu"
import VideoPlayerHero from "./VideoPlayerHero"
import styled from "styled-components"
import adventuresLogo from "../assets/images/JF&G-adventures-white.svg"

const HeroNavigationStyles = styled.section`
  position: relative;
`

const Heading = styled.h1`
  text-align: center;
  line-height: 1.2;
  position: absolute;
  top: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 1.3rem;
  .script {
    font-size: 1.9rem;
  }
`

const Logo = styled.div`
  position: absolute;
  z-index: 3;
  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0);
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 150px;
    display: block;
    margin-bottom: 20px;
  }
`

export default function HeroNavigation({ setContactOpen, toggleContactOpen }) {
  return (
    <>
      <HeroNavigationStyles>
        <VideoPlayerHero video="https://vimeo.com/277725209" />
        <HeroMenu
          setContactOpen={setContactOpen}
          toggleContactOpen={toggleContactOpen}
        />
        <Heading>
          JF&G Picture Studios <br />
          <span className="tilda script">Presents</span>
        </Heading>
        <Logo>
          <img src={adventuresLogo} alt="JF&G Adventures logo" />
          <button className="outline-button">Watch Now</button>
        </Logo>
      </HeroNavigationStyles>
    </>
  )
}
