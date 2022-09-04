import React from 'react';
import Image from 'next/image';
import headerPic from '../../public/images/headerImage.png';
import classes from '../../styles/TopHeaderDesktop.module.css';

export default function TopHeader() {
  return (
    <div className={classes.outerDiv}>
      <Image
        src={headerPic}
        alt="mountains"
        layout="intrinsic"
        width={1000}
        height={403}
      />
      <div className={classes.innerDiv}>
        <h1>Lance Gee</h1>
        <h2>Full-Stack</h2>
        <h2>Developer</h2>
        <p>
          &lt;<span>code</span>&gt; my code life &lt;&frasl;<span>code</span>
          &gt;
        </p>
      </div>
    </div>
  );
}
