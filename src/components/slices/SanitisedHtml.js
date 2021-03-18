import React from "react"
import sanitizeHtml from "sanitize-html"
import styled from "styled-components"

const HtmlStyles = styled.div`
  * {
    overflow-wrap: break-word;
    word-wrap: break-word;
    word-break: break-word;
  }
  *:not(li) {
    margin: 15px 0;
    &:first-child {
      margin: 0;
    }
    &:last-child {
      margin: 0;
    }
  }
  .sanitised-anchor {
    text-decoration: underline;
  }
`

export default function SanitisedHtml({ center, html, ...rest }) {
  const cleanHtml = sanitizeHtml(html, {
    allowedTags: [
      "b",
      "i",
      "em",
      "strong",
      "a",
      "p",
      "h1",
      "h2",
      "h3",
      "h4",
      "h5",
      "h6",
      "ol",
      "ul",
      "li",
      "br",
    ],
    allowedAttributes: {
      a: ["href", "name", "target", "class", "rel"],
    },
    transformTags: {
      a: sanitizeHtml.simpleTransform("a", { class: "sanitised-anchor" }),
    },
  })

  return (
    <HtmlStyles
      className="sanitised-html"
      style={{ textAlign: center ? "center" : "left" }}
      {...rest}
      dangerouslySetInnerHTML={{ __html: cleanHtml }}
    />
  )
}
