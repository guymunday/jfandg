import * as React from "react"
import styled from "styled-components"
import { ControlButton } from "./VideoPlayerHero"
import { Close } from "@styled-icons/material/Close"
import { graphql, useStaticQuery } from "gatsby"
import SanitisedHtml from "./slices/SanitisedHtml"

const ContactStyles = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  overflow: scroll;
  .contact-inner {
    width: 100%;
    min-height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 768px) {
      flex-direction: column;
    }
    .contact-copy {
      /* h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: "Tilda Petite";
        font-display: swap;
        font-style: italic;
        font-weight: normal;
        text-transform: none;
        font-size: 3rem;
      } */
    }
    form {
      display: flex;
      flex-direction: column;
      width: 100%;
      max-width: 500px;
      padding: 30px;
      > * {
        margin: 10px 0;
      }
      input,
      textarea {
        outline: none;
        border: none;
        background: transparent;
        border-bottom: 1px solid white;
        height: 50px;
        color: white;
        padding: 10px 0;
        &::placeholder {
          color: white;
          font-size: 1.3rem;
        }
      }
    }
  }
`

export default function Contact({ toggleContactOpen }) {
  const contactData = useStaticQuery(graphql`
    {
      contact: datoCmsContact {
        copy
      }
    }
  `)

  return (
    <>
      <ContactStyles id="contact">
        <ControlButton
          style={{ position: "absolute", left: 30, top: 30 }}
          onClick={toggleContactOpen}
        >
          <Close />
        </ControlButton>
        <div className="contact-inner">
          <SanitisedHtml
            style={{ maxWidth: 500, padding: 30 }}
            html={contactData?.contact?.copy}
            className="contact-copy"
          />
          <form method="POST" data-netlify="true">
            <input type="text" placeholder="NAME" name="Name" required />
            <input type="email" placeholder="EMAIL" name="Email" />
            <textarea placeholder="MESSAGE" name="Message" />
            <span style={{ margin: "auto" }}>
              <button className="outline-button" type="submit">
                SEND
              </button>
            </span>
          </form>
        </div>
      </ContactStyles>
    </>
  )
}
