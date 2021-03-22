import * as React from "react"
import { useEffect } from "react"
import styled from "styled-components"
import { graphql, Link, useStaticQuery } from "gatsby"
import { gsap } from "gsap"
import { navigate, useLocation } from "@reach/router"

const HeroMenuStyles = styled.nav`
  position: absolute;
  display: flex;
  justify-content: space-around;
  width: 100%;
  z-index: 3;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
  .text-container {
    overflow: hidden;
    .hero-link {
      display: block;
    }
  }
`

const HeroButton = styled(Link)`
  font-family: inherit;
  background: none;
  outline: none;
  border: none;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #fff;
  transition: 0.2s ease-in color;
  cursor: pointer;
  text-decoration: none;
  :hover {
    color: var(--gold) !important;
  }
`

const ContactButton = styled.button`
  font-family: inherit;
  background: none;
  outline: none;
  border: none;
  font-size: 1.5rem;
  text-transform: uppercase;
  color: #fff;
  transition: 0.2s ease-in color;
  cursor: pointer;
  text-decoration: none;
  :hover {
    color: var(--gold) !important;
  }
`

export default function HeroMenu({ toggleContactOpen }) {
  useEffect(() => {
    gsap.from(".hero-link", {
      x: -300,
      duration: 0.8,
      stagger: 0.3,
      ease: "power4.out",
    })
  }, [])

  const menuData = useStaticQuery(graphql`
    {
      menu: allDatoCmsPage(sort: { order: ASC, fields: position }) {
        edges {
          node {
            title
            slug
          }
        }
      }
    }
  `)

  const location = useLocation()

  return (
    <>
      <HeroMenuStyles>
        {menuData?.menu?.edges?.map((item, i) => {
          const itemLocation = `/${item?.node?.slug}`
          return (
            <>
              <div className="text-container" key={i}>
                <HeroButton
                  className="hero-link"
                  to={itemLocation}
                  style={{
                    color:
                      location.pathname === itemLocation ? "var(--gold)" : "white",
                  }}
                >
                  {item?.node?.title}
                </HeroButton>
              </div>
            </>
          )
        })}
        <div className="text-container">
          <ContactButton onClick={toggleContactOpen} className="hero-link">
            Contact
          </ContactButton>
        </div>
      </HeroMenuStyles>
    </>
  )
}
