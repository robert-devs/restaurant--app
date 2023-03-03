import React from 'react'
import { SubHeading } from '../../components'
import { images, data } from '../../constants'

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info"></div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="findUs" />
    </div>
  </div>
)

export default FindUs
