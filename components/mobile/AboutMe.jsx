import React from 'react';
import classes from '../../styles/AboutMe.module.css';

export default function AboutMe() {
  return (
    <div className="container">
      <h1 className={classes.title}>About Me</h1>
      <div className={classes.card}>
        <p className={classes.sectionMe}>
          I’m a senior Piping Designer with over fifteen years of progressive
          experience in the Oil &amp; Gas and Piping industries. Recognized for
          leadership in the management, design, and construction of large-scale
          capital projects. Demonstrated ability to lead diverse teams of
          professionals to new levels of success in a highly competitive
          environment. Strong technical, business development, and project
          management skills. Constantly challenging myself and currently
          finishing a 2-year diploma at SAIT in Software Development. Knowledge
          and experience with Java, Javascript, HTML, CSS, SQL, React, NextJs,
          Bootstrap, MongoDB, Ionic cross-platform framework, Typescript,
          Docker, Git, Github, Linux, UI/UX Design.
        </p>
      </div>
    </div>
  );
}
