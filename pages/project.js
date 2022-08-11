import Image from 'next/image';
import React from 'react';
import NavBar from '../components/mobile/MobileNavBar';
import MyProjects from '../components/mobile/myProjects';
import classes from '../styles/Projects.module.css';
import headerPic from '../public/images/headerImage3.png';
import Footer from './../components/mobile/Footer';

export default function project() {
  return (
    <div className={classes.projectContainer}>
      <NavBar />
      <div className={classes.outerDiv}>
        <Image
          src={headerPic}
          alt="city"
          layout="intrinsic"
          width={412}
          height={403}
        />
        <div className={classes.innerDiv}>
          <h1>Projects</h1>
          <p>
            &lt;<span>code</span>&gt; My Journey As a Developer &lt;&frasl;
            <span>code</span>
            &gt;
          </p>
        </div>
      </div>
      <h5 className={classes.note}>
        <span>Note:</span> Some sites are only designed for desktop use and are not
        responsive.
      </h5>
      <MyProjects />
      <Footer />
    </div>
  );
}
