import Head from 'next/head';
import MobileContainer from './../components/mobile/MobileContainer';
import classes from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import useWindowSize from '../components/desktop/customHooks/useWindowSize';
import DesktopContainer from '../components/desktop/DesktopContainer';

export default function Home() {
  const [windowWidth, setWindowWidth] = useState();
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize === undefined) {
      setWindowWidth(window.innerWidth);
    } else {
      setWindowWidth(windowSize);
    }
  }, [useWindowSize]);

  return (
    <div className={classes.outerDiv}>
      <Head>
        <title>Welcome to Lance Gee Page</title>
        <meta
          name="Lance Gee Personal Page"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {windowWidth < 560 ? <MobileContainer /> : <DesktopContainer />}
    </div>
  );
}
