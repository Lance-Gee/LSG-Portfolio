import React from 'react'
import ProfileSlider from '../desktop/ProfileSlider'
import TopHeader from '../desktop/TopHeader'
import Summary from '../desktop/Summary'
import classes from '../../styles/DesktopContainer.module.css'
import AboutMe from '../desktop/AboutMe'
import FeatureWork from '../desktop/FeatureWork'
import CurrentProject from '../desktop/CurrentProject'
import MyProjects from '../desktop/MyProjects'
import Footer from '../desktop/Footer'
import Blog from '../desktop/Blog'

export default function DesktopContainer() {
  return (
    <div className={`${classes.outerDiv} container`}>
      <div className='row'>
        <div className='col-3'>
            <ProfileSlider />
        </div>
        <div className='col-9'>
            <TopHeader />
            <Summary />
            <AboutMe />
            <FeatureWork />
            <CurrentProject />
            <Blog />
            <MyProjects />
            <Footer />
        </div>
      </div>
    </div>
  )
}
