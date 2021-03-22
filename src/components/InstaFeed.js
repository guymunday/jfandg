import * as React from "react"
import Feed from "react-instagram-authless-feed"
import styled from "styled-components"
import ErrorBoundary from "./ErrorBoundary"
import { Instagram } from "@styled-icons/bootstrap"

const StyledFeed = styled(Feed)`
  max-width: 1000px;
  margin: auto;
  padding: 30px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  row-gap: 30px;
  column-gap: 30px;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 1fr;
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
  a {
    overflow: hidden;
    :last-child,
    :nth-child(7),
    :nth-child(8) {
      @media screen and (max-width: 768px) {
        display: none;
      }
    }
    :nth-child(4),
    :nth-child(5),
    :nth-child(6),
    :nth-child(7),
    :nth-child(8) {
      @media screen and (max-width: 480px) {
        display: none;
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`

export default function InstaFeed() {
  return (
    <div
      style={{
        background: "#000",
        zIndex: 9,
        position: "relative",
      }}
    >
      <h2
        className="tilda"
        style={{ textAlign: "center", fontSize: "2.5rem", paddingTop: 50 }}
      >
        Follow us
      </h2>
      <a href style={{ margin: "40px auto", width: 40, display: "block" }}>
        <Instagram />
      </a>
      <ErrorBoundary>
        <StyledFeed
          userName="jfgrecords"
          className="Feed"
          classNameLoading="Loading"
          limit="9"
        />
      </ErrorBoundary>
    </div>
  )
}
