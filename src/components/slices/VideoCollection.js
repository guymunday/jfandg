import * as React from "react"
import SanitisedHtml from "./SanitisedHtml"
import styled from "styled-components"
import { useVideoDispatchContext } from "../../context/videoContext"

const VideoGrid = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`

const VideoThumbnail = styled.div`
  width: 50%;
  @media screen and (max-width: 768px) {
    width: 100%;
  }
  &:nth-child(3n + 3) {
    width: 100%;
  }
  &:hover {
    cursor: pointer;
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: var(--gold);
    }
  }
  .video-image {
    width: 100%;
    img {
      width: 100%;
      height: auto;
      display: block;
      object-fit: cover;
    }
  }
  .video-copy {
    padding: 50px 30px;
  }
`

export default function VideoCollection({ data }) {
  const dispatch = useVideoDispatchContext()

  return (
    <>
      <VideoGrid>
        {data?.videos?.videoLinks?.map((v, i) => {
          const handleVideoUpdate = () => {
            dispatch({
              type: "UPDATE_VIDEO",
              video: v?.videoUrl?.url,
            })
            window.scrollTo({ left: 0, top: 0, behavior: "smooth" })
          }

          return (
            <>
              <VideoThumbnail
                key={i}
                onClick={handleVideoUpdate}
              >
                <div className="video-image">
                  <img src={v?.videoUrl?.thumbnailUrl} alt={v?.videoUrl?.url} />
                </div>
                <div className="video-copy">
                  <SanitisedHtml center html={v?.copy} />
                </div>
              </VideoThumbnail>
            </>
          )
        })}
      </VideoGrid>
    </>
  )
}
