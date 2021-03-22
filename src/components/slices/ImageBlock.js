import * as React from "react"
import styled from "styled-components"
import SanitisedHtml from "./SanitisedHtml"
import { GatsbyImage } from "gatsby-plugin-image"

const ImageStyles = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 50px 30px;
`

export default function ImageBlock({ data }) {
  return (
    <>
      <ImageStyles>
        <GatsbyImage
          image={data?.image?.gatsbyImageData}
          alt={data?.image?.alt}
        />
        {data?.caption && (
          <SanitisedHtml
            html={data?.caption}
            style={{ textAlign: "center", marginTop: 10 }}
          />
        )}
      </ImageStyles>
    </>
  )
}
