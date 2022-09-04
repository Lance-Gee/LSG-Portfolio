import Image from 'next/image';
import React from 'react';
import homeHospital from '../../public/images/homeHospital.png';
import classes from '../../styles/FeatureWorkDesktop.module.css';

export default function FeatureWork() {
  return (
    <a href="http://172.105.104.224/" target="_blank" rel="noreferrer">
      <div className="container">
        <h2 className={classes.title}>Feature Work</h2>
        <div className={classes.card}>
        <div className='row'>
          <div className='col'>
          <Image
            src={homeHospital}
            alt="homeHospital"
            layout="responsive"
            width={387}
            height={214}
          />
          </div>
          <div className='col'>
          <h3 className={classes.subTitle}>home Hospital</h3>
          <p className={classes.sectionMe}>
            As a fourth semester student we had to do a capstone project, that
            involved team work to build. I am very proud to say that we were
            able to complete the project milestones within the given time frame.
            I led the frontend team that comprised of 4 class mates including
            myself. We were able to pick up React as our frontend framework,
            without any prior experience. The application was built using React,
            Bootstrap, Node, and MongoDB. The Application is a hospital waiting
            app that allows individuals to register and wait in a queue without
            having to present themselves at the hospital. Once it come&#39;s
            close to that individual&#39;s spot they will be notified to come
            into the hospital. The app also includes forms for where you can
            fill out your symptoms, see where you are in line, get a list of all
            hospital wait times, and a map that shows you directions to the
            hospital you chose.
          </p>
          </div>
        </div>
        </div>
      </div>
    </a>
  );
}
