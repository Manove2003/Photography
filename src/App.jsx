import React from 'react'
import RealEstateHero from './components/RealEstateHero'
import { SecondComp } from './components/SecondComp'
import AboutUs from './components/AboutUs'
import PhotoPackages from './components/PhotoPackages'
import GallerySection from './components/GallerySection'
import GetStartedSection from './components/GetStartedSection'
import Footer from './components/Footer'
function App() {
  return (
    <div>
      <RealEstateHero/>
      <SecondComp/>
      <AboutUs/>
      <PhotoPackages/>
      <GallerySection/>
      <GetStartedSection/>
      <Footer/>
    </div>
  )
}

export default App