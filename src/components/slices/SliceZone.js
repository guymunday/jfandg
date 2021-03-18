import * as React from "react"
import Copy from "./Copy"
import CopyImage from "./CopyImage"
import ImageCopy from "./ImageCopy"
import VideoCollection from "./VideoCollection"

export default function SliceZone({ slices }) {
  const content = slices.map((s, i) => {
    switch (s.model.name) {
      case "Image and Copy":
        return <ImageCopy key={i} data={s} />
      case "Copy and Image":
        return <CopyImage key={i} data={s} />
      case "Copy":
        return <Copy key={i} data={s} />
      case "Video Collection":
        return <VideoCollection key={i} data={s} />
      default:
        return null
    }
  })

  return <div>{content}</div>
}
