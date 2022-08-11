import React from 'react';
import AboutMe from './AboutMe';
import CurrentProject from './CurrentProject';
import FeatureWork from './FeatureWork';
import Footer from './Footer';
import MobileNavBar from './MobileNavBar';
import Summary from './Summary';
import TopHeader from './TopHeader';

export default function MobileContainer() {
  return (
    <>
      <MobileNavBar />
      <div
        className="container"
        style={{ background: '#1E1E28', paddingBottom: '60px' }}
      >
        <TopHeader />
        <Summary />
        <AboutMe />
        <FeatureWork />
        <CurrentProject />
      </div>
      <Footer />
    </>
  );
}
