import * as React from "react"

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error) {
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    console.log(error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <h3 className="tilda" style={{ textAlign: "center", fontSize: "2rem" }}>
          Something went wrong fetching our instagram feed
        </h3>
      )
    }

    return this.props.children
  }
}
