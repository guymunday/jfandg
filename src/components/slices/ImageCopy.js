import * as React from "react"
import styled from "styled-components"
import SanitisedHtml from "./SanitisedHtml"
import { GatsbyImage } from "gatsby-plugin-image"

const BlockStyles = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-template-rows: auto;
  }
  .copy {
    align-self: center;
    max-width: 500px;
    margin: auto;
    padding: 30px;
  }
`

export default function ImageCopy({ data }) {
  return (
    <>
      <BlockStyles>
        <GatsbyImage
          image={data?.image?.gatsbyImageData}
          alt={data?.image?.alt}
        />
        <div className="copy">
          <SanitisedHtml html={data?.copy} />
        </div>
      </BlockStyles>
    </>
  )
}
