import { Instagram, Twitter } from "@styled-icons/bootstrap"
import { Facebook } from "@styled-icons/entypo-social/Facebook"
import * as React from "react"
import styled from "styled-components"
import jfandgLogo from "../assets/images/JF&G-pictures-white.svg"
import { graphql, useStaticQuery } from "gatsby"

const FooterStyles = styled.footer`
  padding: 30px;
  background: #000;
  z-index: 9;
  position: relative;
  .footer-inner {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    .footer-logo {
      width: 100px;
    }
    .footer-social-icons {
      display: flex;
      .footer-icon {
        display: block;
        height: 25px;
        width: 25px;
        margin: 0 5px;
      }
    }
  }
  .copyright {
    display: block;
    width: 100%;
    text-align: center;
  }
`

export default function Footer() {
  const footerData = useStaticQuery(graphql`
    {
      links: datoCmsContact {
        facebookLink
        instagramLink
        twitterLink
      }
    }
  `)

  return (
    <>
      <FooterStyles>
        <div className="footer-inner">
          <div className="footer-logo">
            <img src={jfandgLogo} alt="JF&G Pictures logo" />
          </div>
          <div className="footer-social-icons">
            {footerData?.links?.twitterLink && (
              <a
                href={footerData?.links?.twitterLink}
                target="_blank"
                className="footer-icon"
              >
                <Twitter />
              </a>
            )}
            {footerData?.links?.facebookLink && (
              <a
                href={footerData?.links?.facebookLink}
                target="_blank"
                className="footer-icon"
              >
                <Facebook />
              </a>
            )}
            {footerData?.links?.instagramLink && (
              <a
                href={footerData?.links?.instagramLink}
                target="_blank"
                className="footer-icon"
              >
                <Instagram />
              </a>
            )}
          </div>
        </div>
        <p className="copyright">© JF&G Pictures {new Date().getFullYear()}</p>
      </FooterStyles>
    </>
  )
}
