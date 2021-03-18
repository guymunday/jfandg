import * as React from "react"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"
import reset from "../styles/reset"
import global from "../styles/global"
import "../styles/fonts.css"
import HeroNavigation from "./HeroNavigation"
import InstaFeed from "./InstaFeed"
import Contact from "./Contact"

const GlobalStyles = createGlobalStyle`
${reset}
${global}
`

export default function Layout({ children }) {
  const [contactOpen, setContactOpen] = React.useState(false)
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
      <HeroNavigation setContactOpen={setContactOpen} />
      <main className="page-wrapper">{children}</main>
      <InstaFeed />
      {contactOpen && <Contact setContactOpen={setContactOpen} />}
    </>
  )
}
