import * as React from "react"
import Layout from "./src/components/Layout"
import { GlobalVideoProvider } from "./src/context/videoContext"

export const wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

export const wrapRootElement = ({ element }) => {
  return <GlobalVideoProvider>{element}</GlobalVideoProvider>
}
