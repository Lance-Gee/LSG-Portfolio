import React from 'react';
import classes from '../../styles/AboutMeDesktop.module.css';

export default function AboutMe() {
  return (
    <div className="container">
      <h2 className={classes.title}>About Me</h2>
      <div className={classes.card}>
        <p className={classes.sectionMe}>
          I&apos;m a junior software developer with knowledge and experience
          with Java, Javascript, HTML, CSS, SQL, React, NextJs, Bootstrap,
          MongoDB, Ionic cross-platform framework, Typescript, Docker, Git,
          Github, Linux, UI/UX Design. In my past career, I was a senior Piping
          Designer with over fifteen years of progressive experience in the Oil
          &amp; Gas and Piping industries. Recognized for leadership in the
          management, design, and construction of large-scale capital projects.
          Demonstrated ability to lead diverse teams of professionals to new
          levels of success in a highly competitive environment. Strong
          technical, business development, and project management skills.
        </p>
      </div>
    </div>
  );
}
