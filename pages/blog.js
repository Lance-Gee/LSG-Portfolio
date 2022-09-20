import Image from 'next/image';
import React from 'react';
import headerPic from '../public/images/headerImage2.png';
import blog1 from '../public/images/blog1.png';
import blog2 from '../public/images/blog2.png';
import classes from '../styles/Blog.module.css';
import NavBar from '../components/mobile/MobileNavBar';
import Footer from './../components/mobile/Footer';

export default function blog() {
  return (
    <div className={classes.blogContainer}>
      <NavBar />
      <div className={classes.outerDiv}>
        <Image
          src={headerPic}
          alt="mountains"
          layout="intrinsic"
          width={412}
          height={403}
        />
        <div className={classes.innerDiv}>
          <h1>Blogs</h1>
          <p>
            &lt;<span>code</span>&gt; what I write about &lt;&frasl;
            <span>code</span>
            &gt;
          </p>
        </div>
        <a
          href="https://lance-gee.github.io/myFirstBlog/"
          target="_blank"
          rel="noreferrer"
        >
          <div className={classes.card}>
            <div>
              <Image
                src={blog1}
                alt="blog1"
                layout="intrinsic"
                width={411}
                height={271}
              />
            </div>
            <div className={classes.cardInner}>
              <h2>My First Blog Learning React</h2>
              <p>
                This is one of my first blogs that I wrote talking about the
                basics of React and my experience learning React. It talks about
                background knowledge that you should have before starting React
                projects. I also dive into React hooks and the use cases for
                most of the hooks.
              </p>
            </div>
          </div>
        </a>
      </div>
      <a
        href="https://lance-gee.github.io/myFirstBlog/"
        target="_blank"
        rel="noreferrer"
      >
        <div className={classes.card}>
          <div>
            <Image
              src={blog2}
              alt="blog2"
              layout="intrinsic"
              width={411}
              height={271}
            />
          </div>
          <div className={classes.cardInner}>
            <h2>Tutorial building a React app</h2>
            <p>
              In this blog i go through a detailed tutorial on how to start a
              React app and all the little setup configurations you need to do
              before starting to code. Also demonstrate the use of some of the
              React hooks with in the application.
            </p>
          </div>
        </div>
      </a>
      <div className={classes.footer}>
        <Footer />
      </div>
    </div>
  );
}
