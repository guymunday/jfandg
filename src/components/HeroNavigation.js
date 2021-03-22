import * as React from "react"
import { graphql, useStaticQuery } from "gatsby"
import HeroMenu from "./HeroMenu"
import VideoPlayerHero from "./VideoPlayerHero"
import styled from "styled-components"
import adventuresLogo from "../assets/images/JF&G-adventures-white.svg"
import { ControlButton } from "./VideoPlayerHero"
import { Close } from "@styled-icons/material/Close"
import { gsap } from "gsap"
import { useVideoDispatchContext } from "../context/videoContext"

const HeroNavigationStyles = styled.section`
  position: sticky;
  top: 0;
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
  .buttons {
    display: flex;
    a {
      margin: 0 5px;
    }
    @media screen and (max-width: 600px) {
      flex-direction: column;
      a {
        margin: 5px 0;
      }
    }
  }
`

export default function HeroNavigation({ setContactOpen, toggleContactOpen }) {
  const [watchNow, setWatchNow] = React.useState(false)
  const headingRef = React.useRef(null)
  const logoRef = React.useRef(null)

  const dispatch = useVideoDispatchContext()

  const heroData = useStaticQuery(graphql`
    {
      datoCmsHeroVideo {
        backupImage {
          alt
          gatsbyImageData(
            layout: FULL_WIDTH
            placeholder: BLURRED
            forceBlurhash: false
          )
        }
        trailerVideo {
          url
        }
        buttons {
          buttonText
          externalLink
        }
      }
    }
  `)

  React.useEffect(() => {
    gsap.from(headingRef.current, {
      y: -200,
    })
    gsap.from(logoRef.current, {
      y: 200,
      delay: 1,
      duration: 1,
    })
  }, [watchNow])

  const handleVideoReset = () => {
    dispatch({
      type: "UPDATE_VIDEO",
      video: heroData?.datoCmsHeroVideo?.trailerVideo?.url,
    })
  }

  return (
    <>
      <HeroNavigationStyles>
        <VideoPlayerHero
          watchNow={watchNow}
          setWatchNow={setWatchNow}
          backupImage={heroData?.datoCmsHeroVideo?.backupImage}
        />
        {!watchNow && (
          <>
            <HeroMenu
              setContactOpen={setContactOpen}
              toggleContactOpen={toggleContactOpen}
            />

            <Heading ref={headingRef}>
              JF&G Picture Studios <br />
              <span className="tilda script">Presents</span>
            </Heading>
          </>
        )}
        <Logo>
          <img src={adventuresLogo} alt="JF&G Adventures logo" />
          {!watchNow && (
            <button
              onClick={() => {
                setWatchNow(!watchNow)
                handleVideoReset()
              }}
              className="outline-button"
              style={{ margin: "0 5px" }}
            >
              Watch Now
            </button>
          )}
          {watchNow && (
            <div className="buttons">
              {heroData?.datoCmsHeroVideo?.buttons?.map((b, i) => {
                return (
                  <a
                    key={i}
                    onClick={() => setWatchNow(!watchNow)}
                    className="outline-button"
                    href={b?.externalLink}
                    target="_blank"
                  >
                    {b?.buttonText}
                  </a>
                )
              })}
            </div>
          )}
        </Logo>
        {watchNow && (
          <ControlButton
            style={{ position: "absolute", top: 30, left: 30, zIndex: 999 }}
            onClick={() => setWatchNow(!watchNow)}
          >
            <Close />
          </ControlButton>
        )}
      </HeroNavigationStyles>
    </>
  )
}
