import * as React from "react"
import styled from "styled-components"
import SanitisedHtml from "./SanitisedHtml"

const CopyStyles = styled.div`
  max-width: 700px;
  margin: auto;
  padding: 50px 30px;
`

export default function Copy({ data }) {
  return (
    <>
      <CopyStyles>
        <SanitisedHtml html={data?.copy} />
      </CopyStyles>
    </>
  )
}
