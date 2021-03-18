import { css } from "styled-components"

const globalCss = css`
  html {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    position: relative;
  }

  body {
    --sans-bold: "Neutraface Bold", sans-serif;
    --sans-book: "Neutraface Book", sans-serif;
    overflow-x: hidden;
    width: 100%;
    min-height: 100vh;
    min-height: -webkit-fill-available;
    font-family: "Neutraface Book", sans-serif;
    font-weight: 400;
    font-size: 18px;
    background: #000;
    color: #fff;
  }

  p,
  a,
  li {
    font-size: 1rem;
    b,
    strong {
      font-family: var(--sans-bold);
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    text-transform: uppercase;
  }

  h1 {
    font-size: 2rem;
    transition: 0.2s ease font-size;
    @media screen and (max-width: 600px) {
      font-size: 1.7rem;
    }
  }
  h2 {
    font-size: 1.8rem;
    transition: 0.2s ease font-size;
    @media screen and (max-width: 600px) {
      font-size: 1.5rem;
    }
  }
  h3 {
    font-size: 1.6rem;
    transition: 0.2s ease font-size;
    @media screen and (max-width: 600px) {
      font-size: 1.3rem;
    }
  }
  h4 {
    font-size: 1.4rem;
    transition: 0.2s ease font-size;
    @media screen and (max-width: 600px) {
      font-size: 1.2rem;
    }
  }
  h5,
  h6 {
    font-size: 1.2rem;
    transition: 0.2s ease font-size;
    @media screen and (max-width: 600px) {
      font-size: 1.2rem;
    }
  }

  ul {
    list-style-position: outside;
    margin-left: 18px !important;
    li {
      margin-bottom: 1rem !important;
    }
  }

  ol {
    list-style-position: outside;
    margin-left: 22px !important;
    li {
      margin-bottom: 1rem !important;
    }
  }

  iframe {
    border: none;
    outline: none;
  }

  .tilda {
    font-family: "Tilda Petite";
    font-display: swap;
    font-style: italic;
    font-weight: normal;
    text-transform: none;
  }

  .outline-button {
    font-family: inherit;
    background: none;
    outline: none;
    border: none;
    font-size: 1.2rem;
    text-transform: uppercase;
    color: #fff;
    transition: 0.2s ease-in all;
    white-space: nowrap;
    padding: 10px;
    border: 1px solid white;
    cursor: pointer;
    :hover {
      color: gold;
      background: white;
    }
  }
`

export default globalCss
