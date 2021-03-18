import * as React from "react"
import { graphql } from "gatsby"
import SliceZone from "../components/slices/SliceZone"
import styled from "styled-components"

const PageHeader = styled.div`
  padding: 60px 30px;
  text-align: center;
`

export default function Page({ data }) {
  return (
    <>
      <PageHeader>
        <h1 className="tilda">{data?.page?.title}</h1>
      </PageHeader>
      <SliceZone slices={data?.page?.contentBlocks} />
    </>
  )
}

export const PAGE_QUERY = graphql`
  query PageQuery($slug: String!) {
    page: datoCmsPage(slug: { eq: $slug }) {
      slug
      title
      contentBlocks {
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
