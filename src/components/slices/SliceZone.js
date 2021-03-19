import * as React from "react"
import FadeIn from "../FadeIn"
import Copy from "./Copy"
import CopyImage from "./CopyImage"
import ImageCopy from "./ImageCopy"
import VideoCollection from "./VideoCollection"

export default function SliceZone({ slices }) {
  const content = slices.map((s, i) => {
    switch (s.model.name) {
      case "Image and Copy":
        return (
          <FadeIn key={i}>
            <ImageCopy data={s} />
          </FadeIn>
        )
      case "Copy and Image":
        return (
          <FadeIn key={i}>
            <CopyImage data={s} />
          </FadeIn>
        )
      case "Copy":
        return (
          <FadeIn key={i}>
            <Copy data={s} />
          </FadeIn>
        )
      case "Video Collection":
        return <VideoCollection key={i} data={s} />
      default:
        return null
    }
  })

  return <div>{content}</div>
}
