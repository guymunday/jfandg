import * as React from "react"
import ReactPlayer from "react-player"
import styled from "styled-components"

const VideoWrapper = styled.section`
  position: relative;
  width: 100%;
  padding-top: 56.25%;
`

const ControlButton = styled.button`
  width: 40px;
  height: 40px;
  background: black;
  border: white 2px solid;
  border-radius: 50%;
  color: white;
  transform-origin: center;
  transform: rotate(-90deg);
  cursor: pointer;
  &:focus {
    outline: none;
  }
`

const Scrubber = styled.div`
  position: absolute;
  top: 5%;
  right: -48%;
  width: 50%;
  transform-origin: 0% 0%;
  transform: rotate(90deg);
  display: flex;
  align-items: center;
  justify-content: center;
  input[type="range"] {
    -webkit-appearance: none; /* Override default CSS styles */
    appearance: none;
    flex: 1;
    height: 2px;
    background: rgba(255, 255, 255, 0.8);
    outline: none;
    &::-webkit-slider-thumb {
      -webkit-appearance: none;
      appearance: none;
      width: 8px;
      height: 8px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
    }
    &::-moz-range-thumb {
      width: 15px;
      height: 15px;
      background: white;
      border-radius: 50%;
      cursor: pointer;
    }
  }
`

export default function VideoPlayer({ video }) {
  const playerRef = React.useRef(null)
  const [isPlaying, setIsPlaying] = React.useState({
    playing: true,
    volume: 0,
    played: 0,
    seeking: false,
  })

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

  return (
    <>
      <VideoWrapper>
        <ReactPlayer
          ref={playerRef}
          url={video}
          playing={playing}
          volume={volume}
          onProgress={handleProgress}
          width={"100%"}
          height={"100%"}
          loop={true}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <Scrubber>
          <ControlButton onClick={handleIsPlaying}>Stop</ControlButton>
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

          <ControlButton onClick={handleVolume}>Sound</ControlButton>
        </Scrubber>
      </VideoWrapper>
    </>
  )
}

/*
          <svg
            style={{
              position: "absolute",
              transform: "rotate(-90deg)",
              height: 90,
              bottom: "-64%",
              right: "8%",
            }}
            viewBox="0 0 159.38 256.85"
          >
            <line
              x1="31.63"
              y1="0.55"
              x2="79.73"
              y2="256.25"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeWidth: 5,
              }}
            />
            <line
              x1="0.5"
              y1="74.24"
              x2="79.73"
              y2="256.35"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeWidth: 5,
              }}
            />
            <line
              x1="127.76"
              y1="0.5"
              x2="79.65"
              y2="256.2"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeWidth: 5,
              }}
            />
            <line
              x1="158.88"
              y1="74.19"
              x2="79.65"
              y2="256.3"
              style={{
                fill: "none",
                stroke: "#fff",
                strokeLinecap: "round",
                strokeWidth: 5,
              }}
            />
          </svg>
*/
