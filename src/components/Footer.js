import { Instagram, Twitter } from "@styled-icons/bootstrap"
import { Facebook } from "@styled-icons/entypo-social/Facebook"
import * as React from "react"
import styled from "styled-components"
import jfandgLogo from "../assets/images/JF&G-pictures-white.svg"

const FooterStyles = styled.footer`
  padding: 30px;
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
  return (
    <>
      <FooterStyles>
        <div className="footer-inner">
          <div className="footer-logo">
            <img src={jfandgLogo} alt="JF&G Pictures logo" />
          </div>
          <div className="footer-social-icons">
            <a href className="footer-icon">
              <Twitter />
            </a>
            <a href className="footer-icon">
              <Facebook />
            </a>
            <a href className="footer-icon">
              <Instagram />
            </a>
          </div>
        </div>
        <p className="copyright">copyright {new Date().getFullYear()}</p>
      </FooterStyles>
    </>
  )
}
