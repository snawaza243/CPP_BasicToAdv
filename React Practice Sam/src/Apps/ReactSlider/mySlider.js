import React from 'react'
import Slider from 'react-slider'

import img1 from './img/pic (1).jpg'
import img2 from './img/pic (2).jpg'
import img3 from './img/pic (3).jpg'

function SliderApp() {
  const sliderList1 = [
    {
      title: 'Post 1 title',
      img: img1,
      desc: 'Post 1 description'
    },
    {
      title: 'Post 2 title',
      img: img2,
      desc: 'Post 2 description'
    },
    {
      title: 'Post 3 title',
      img: img3,
      desc: 'Post 3 description'
    }
  ]
  const sliderSettings = {
    data: sliderList1,
    speed: 3000,
    bgColor: '#070707',
    showButton: true,
    buttonText: 'View Projects',
    buttonHref: 'https://www.example.com',
    buttonTarget: '_self'
  }

  return (
    <>
      <div className='App'>
        <Slider sliderSettings={sliderSettings} />
      </div>
    </>
  )
}

export default SliderApp
