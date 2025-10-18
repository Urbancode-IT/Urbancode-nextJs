import React from 'react'
import Herosection from './components/Herosection'
import OurMileStone from './components/OurMileStone'
import MissionVision from './components/MissionVision'
import TrainingSection from './components/TrainingSection'
import FeaturesSection from './components/FeaturesSection'
import ImageGallery from './components/ImageGallery'
import EventsSection from './components/EventsSection'
import Navbar from '../components/header/Navbar'


const About = () => {
  return (
    <div>
       
        <Herosection/>
        <OurMileStone/>
        <MissionVision/>
        <TrainingSection/>
        
        <FeaturesSection/>
        <ImageGallery/>
        <EventsSection/>
    </div>
  )
}

export default About