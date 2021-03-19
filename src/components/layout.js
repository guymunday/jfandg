import * as React from "react"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"
import reset from "../styles/reset"
import global from "../styles/global"
import "../styles/fonts.css"
import HeroNavigation from "./HeroNavigation"
import InstaFeed from "./InstaFeed"
import Contact from "./Contact"
import { gsap } from "gsap"
import Footer from "./Footer"

const GlobalStyles = createGlobalStyle`
${reset}
${global}
`

export default function Layout({ children }) {
  const [contactOpen, setContactOpen] = React.useState(false)

  const toggleContactOpen = () => {
    if (contactOpen) {
      let tl = gsap.timeline({ onComplete: () => setContactOpen(false) })
      tl.to("#contact", { x: 100, duration: 1 })
      tl.to("#contact", { y: 50, duration: 1 })
    } else {
      async function open() {
        await setContactOpen(true)
        await gsap.from("#contact", { x: 100, duration: 1 })
      }
      open()
    }
  }

  return (
    <>
      <Helmet>
        <link
          href="//cloud.typenetwork.com/projects/5383/fontface.css/"
          rel="stylesheet"
          type="text/css"
        ></link>
      </Helmet>
      <GlobalStyles />
      <HeroNavigation
        setContactOpen={setContactOpen}
        toggleContactOpen={toggleContactOpen}
      />
      <main className="page-wrapper">{children}</main>
      {/* <InstaFeed /> */}
      <Footer />
      {contactOpen && (
        <Contact
          setContactOpen={setContactOpen}
          toggleContactOpen={toggleContactOpen}
        />
      )}
    </>
  )
}
