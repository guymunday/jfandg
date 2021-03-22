import * as React from "react"
import ReactPlayer from "react-player"
import styled from "styled-components"
import { useVideoStateContext } from "../context/videoContext"
import screenfull from "screenfull"
import { VolumeUp } from "@styled-icons/material-sharp/VolumeUp"
import { VolumeMute } from "@styled-icons/material-sharp/VolumeMute"
import {
  PlayArrow,
  Pause,
  Fullscreen,
  FullscreenExit,
} from "@styled-icons/material"
import { GatsbyImage } from "gatsby-plugin-image"

const VideoWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  min-height: 500px;
  overflow: hidden;
  .backup-image {
    display: none !important;
    @media (max-aspect-ratio: 1/1) {
      display: block !important;
    }
  }
`

export const ControlButton = styled.button`
  width: 30px;
  height: 30px;
  background: black;
  border: white 1px solid;
  border-radius: 50%;
  color: white;
  transform-origin: center;
  transform: rotate(-90deg);
  position: relative;
  cursor: pointer;
  &:focus {
    outline: none;
  }
  svg {
    width: 80%;
  }
`

const ScrubberContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 60px;
  top: 0;
  right: 0;
  background: linear-gradient(to left, rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0));
  .scrubber-inner {
    position: absolute;
    top: 0;
    left: 100%;
    transform: rotate(90deg);
    transform-origin: 0% 0%;
    width: 100vh;
    min-width: 500px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    input[type="range"] {
      appearance: none;
      height: 1px;
      background: whitesmoke;
      display: block;
      width: 60%;
      &::-webkit-slider-thumb {
        appearance: none;
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
        cursor: pointer;
      }
      &::-moz-range-thumb {
        appearance: none;
        width: 8px;
        height: 8px;
        background: white;
        border-radius: 50%;
        cursor: pointer;
      }
    }
  }
`

export default function VideoPlayer({ watchNow, setWatchNow, backupImage }) {
  const playerRef = React.useRef(null)
  const playerFullScreenRef = React.useRef(null)

  const [isFullScreen, setIsFullScreen] = React.useState(false)
  const [hasMounted, setHasMounted] = React.useState(false)

  const [isPlaying, setIsPlaying] = React.useState({
    playing: true,
    volume: 0,
    played: 0,
    seeking: false,
  })

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  React.useEffect(() => {
    if (watchNow) {
      setIsPlaying({ ...isPlaying, volume: 1 })
    } else {
      setIsPlaying({ ...isPlaying, volume: 0 })
    }
  }, [watchNow])

  const { playing, volume, played } = isPlaying

  const handleIsPlaying = () => {
    setIsPlaying({ ...isPlaying, playing: !isPlaying.playing })
  }

  const handleVolume = () => {
    setIsPlaying({ ...isPlaying, volume: isPlaying.volume === 0 ? 1 : 0 })
  }

  const handleProgress = progress => {
    if (!isPlaying.seeking) {
      setIsPlaying({ ...isPlaying, ...progress })
    }
  }

  const handleSeeking = event => {
    setIsPlaying({
      ...isPlaying,
      played: parseFloat(event.target.value) / 100,
    })
  }

  const handleSeekingMouseDown = () => {
    setIsPlaying({ ...isPlaying, seeking: true })
  }

  const handleSeekingMouseUp = event => {
    setIsPlaying({ ...isPlaying, seeking: false })
    playerRef.current.seekTo(event.target.value / 100, "fraction")
  }

  const toggleFullScreen = () => {
    screenfull.toggle(playerFullScreenRef.current)
    setIsFullScreen(!isFullScreen)
  }

  const { currentVideo } = useVideoStateContext()

  return (
    <>
      <VideoWrapper
        ref={playerFullScreenRef}
        style={{
          background: isFullScreen ? "rgba(0,0,0,0)" : "rgba(0,0,0,0.5)",
        }}
      >
        {/* {!watchNow && (
          <GatsbyImage
            image={backupImage?.gatsbyImageData}
            alt={backupImage?.alt}
            style={{
              display: isFullScreen ? "none" : "block",
              height: "100%",
            }}
            className="backup-image"
          />
        )} */}
        {hasMounted && (
          <ReactPlayer
            ref={playerRef}
            url={currentVideo}
            playing={playing}
            volume={volume}
            onProgress={handleProgress}
            width={"100%"}
            height={"100%"}
            loop={true}
            className="react-player"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: isFullScreen
                ? "translate(-50%, -50%) scale(1)"
                : "translate(-50%, -50%) scale(1.5)",
              zIndex: -1,
            }}
          />
        )}
        <ScrubberContainer>
          <div className="scrubber-inner">
            <ControlButton onClick={handleIsPlaying}>
              {isPlaying.playing ? <Pause /> : <PlayArrow />}
            </ControlButton>
            <input
              type="range"
              min={0}
              max={100}
              value={played * 100}
              onChange={handleSeeking}
              onInput={handleSeeking}
              onMouseDown={handleSeekingMouseDown}
              onMouseUp={handleSeekingMouseUp}
            />
            <ControlButton onClick={handleVolume}>
              {isPlaying.volume === 0 ? <VolumeUp /> : <VolumeMute />}
            </ControlButton>
            <ControlButton
              style={{ marginLeft: 20 }}
              onClick={toggleFullScreen}
            >
              {!isFullScreen ? <Fullscreen /> : <FullscreenExit />}
            </ControlButton>
          </div>
        </ScrubberContainer>
      </VideoWrapper>
    </>
  )
}
