import React from 'react'
import NavBar from '../components/NavBar/NavBar'
import SlideShow from '../components/ImageSlider/SlideShow'
import LinkRow from '../components/ButtonLinks/LinkRow'

import image1 from '../assets/images/pexels-antoni-shkraba-5816286 (1).jpg'
import image2 from '../assets/images/pexels-mikhail-nilov-7734597.jpg'
import image3 from '../assets/images/pexels-rdne-stock-project-7821498.jpg'

const Index = () => {

    const images = [
        image1,
        image2,
        image3
    ]

  return (
    <>
        <NavBar />
        <SlideShow slides={images} interval={3000} />
        <LinkRow />
    </>
  )
}

export default Index