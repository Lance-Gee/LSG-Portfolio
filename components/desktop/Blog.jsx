import Image from 'next/image';
import React from 'react';
import classes from '../../styles/BlogDesktop.module.css';
import blog1 from '../../public/images/blog1.png';
import blog2 from '../../public/images/blog2.png';

export default function Blog() {
  return (
    <div className={classes.blogContainer}>
      <div className={classes.outerDiv}>
        <h2 className={classes.title}>Blogs</h2>
        <div className="row">
          <div className="col">
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
                    layout="responsive"
                    width={411}
                    height={271}
                  />
                </div>
                <div className={classes.cardInner}>
                  <h4>My First Blog Learning React</h4>
                  <p>
                    This is one of my first blogs that I wrote talking about the
                    basics of React and my experience learning React. It talks
                    about background knowledge that you should have before
                    starting React projects. I also dive into React hooks and
                    the use cases for most of the hooks.
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="col">
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
                    layout="responsive"
                    width={411}
                    height={271}
                  />
                </div>
                <div className={classes.cardInner}>
                  <h4>Tutorial building a React app</h4>
                  <p>
                    In this blog i go through a detailed tutorial on how to
                    start a React app and all the little setup configurations
                    you need to do before starting to code. Also demonstrate the
                    use of some of the React hooks with in the application.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
