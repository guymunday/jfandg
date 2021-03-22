import * as React from "react"
import { graphql } from "gatsby"
import SliceZone from "../components/slices/SliceZone"
import styled from "styled-components"
import { gsap, ScrollToPlugin, ScrollTrigger } from "gsap/all"

gsap.registerPlugin(ScrollToPlugin, ScrollTrigger)

const PageHeader = styled.div`
  padding: 60px 30px;
  text-align: center;
`

export default function Page({ location, data }) {
  const pageRef = React.useRef(null)
  React.useEffect(() => {
    let tl = gsap.timeline()

    gsap.to(window, {
      scrollTo: 150,
      duration: 1,
    })

    tl.to(pageRef.current, {
      y: -50,
      duration: 1,
    }).to(pageRef.current, {
      y: 0,
      duration: 1,
    })
  }, [location])

  return (
    <>
      <div
        ref={pageRef}
        style={{
          background: "#000",
          zIndex: 9,
          position: "relative",
        }}
      >
        <PageHeader>
          <h1 className="tilda">{data?.page?.title}</h1>
        </PageHeader>
        <SliceZone slices={data?.page?.contentBlocks} />
      </div>
    </>
  )
}

export const PAGE_QUERY = graphql`
  query PageQuery($slug: String!) {
    page: datoCmsPage(slug: { eq: $slug }) {
      slug
      title
      contentBlocks {
        ... on DatoCmsImage {
          model {
            name
          }
          caption
          image {
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              forceBlurhash: false
            )
          }
        }
        ... on DatoCmsCopy {
          copy
          model {
            name
          }
        }
        ... on DatoCmsCopyAndImage {
          copy
          model {
            name
          }
          image {
            alt
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              forceBlurhash: false
            )
          }
        }
        ... on DatoCmsImageAndCopy {
          copy
          model {
            name
          }
          image {
            alt
            gatsbyImageData(
              layout: FULL_WIDTH
              placeholder: BLURRED
              forceBlurhash: false
            )
          }
        }
        ... on DatoCmsVideoCollection {
          model {
            name
          }
          videos {
            videoLinks {
              copy
              videoUrl {
                height
                provider
                providerUid
                thumbnailUrl
                title
                url
                width
              }
            }
          }
        }
      }
    }
  }
`
