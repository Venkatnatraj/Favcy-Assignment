import React, { useState } from 'react'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import * as download from "../assets/download.png"

const Image = () => {
  const [isZoomed, setIsZoomed] = useState(false)

  const handleImgLoad = () => {
    setIsZoomed(isZoomed)
  }

  const handleZoomChange =() => {
    setIsZoomed(!isZoomed)
  }

  return (
    <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
      <img
        alt="that wanaka tree"
        onLoad={handleImgLoad}
        src = {download}
        width="500"
      />
    </ControlledZoom>
  )
}

export default Image