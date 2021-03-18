import * as React from "react"
import styled from "styled-components"
import SanitisedHtml from "./SanitisedHtml"
import { GatsbyImage } from "gatsby-plugin-image"

const BlockStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  .copy {
    align-self: center;
    max-width: 500px;
    margin: auto;
    padding: 30px;
  }
`

export default function CopyImage({ data }) {
  return (
    <>
      <BlockStyles>
        <div className="copy">
          <SanitisedHtml html={data?.copy} />
        </div>
        <GatsbyImage
          image={data?.image?.gatsbyImageData}
          alt={data?.image?.alt}
        />
      </BlockStyles>
    </>
  )
}
