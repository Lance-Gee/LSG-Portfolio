import Image from 'next/image';
import React from 'react';
import OffTheWok from '../../public/images/OffTheWok.png';
import classes from '../../styles/CurrentProjectDesktop.module.css';

export default function CurrentProject() {
  return (
    <a href="https://offthewok.com" target="_blank" rel="noreferrer">
      <div className="container">
        <h2 className={classes.title}>Current Project</h2>
        <div className={classes.card}>
          <div className='row'>
            <div className='col'>
          <Image
            src={OffTheWok}
            alt="OffTheWok"
            layout="responsive"
            width={415}
            height={230}
          />
            </div>
            <div className='col'>
          <h3 className={classes.subTitle}>Off The Wok</h3>
          <p className={classes.sectionMe}>
            I&apos;m currently working on revamping a clients website with
            NextJs, to include api calls to Spotify to get the clients latest
            episodes, as well as include a small snippet of the episode the
            visitor wants to listen to. Future add on&apos;s will include
            integration with Sanity.io for ecommerce site, and the ability for
            the owner of the site to be able to update their catelog.
          </p>
            </div>
          </div>
        </div>
      </div>
    </a>
  );
}
