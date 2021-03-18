import * as React from "react"
import { createContext, useReducer, useContext } from "react"

let initialVideoState = {
  currentVideo: "https://vimeo.com/277725209",
}

const VideoStateContext = createContext(initialVideoState)
const VideoDispatchContext = createContext()

const videoReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_VIDEO": {
      return {
        ...state,
        currentVideo: action.video,
      }
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export const GlobalVideoProvider = ({ children }) => {
  const [state, dispatch] = useReducer(videoReducer, {
    currentVideo: "https://vimeo.com/277725209",
  })

  return (
    <VideoDispatchContext.Provider value={dispatch}>
      <VideoStateContext.Provider value={state}>
        {children}
      </VideoStateContext.Provider>
    </VideoDispatchContext.Provider>
  )
}

export const useVideoStateContext = () => useContext(VideoStateContext)
export const useVideoDispatchContext = () => useContext(VideoDispatchContext)
