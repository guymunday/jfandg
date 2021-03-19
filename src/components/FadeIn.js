import * as React from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function FadeIn({ children, ...rest }) {
  const fadeRef = React.useRef(null)
  const fadeInnerRef = React.useRef(null)

  React.useEffect(() => {
    gsap.from(fadeInnerRef.current, {
      autoAlpha: 0,
      y: 100,
      scrollTrigger: fadeRef.current,
    })
  })

  return (
    <div ref={fadeRef} style={{ overflow: "hidden" }} {...rest}>
      <div ref={fadeInnerRef}>{children}</div>
    </div>
  )
}
