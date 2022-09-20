import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import classes from '../../styles/MyProjectsDesktop.module.css';

export default function MyProjectsLayout() {
  const [projectList, setProjectList] = useState();
  const [startSize, setStartSize] = useState('small');

  async function getProjects() {
    try {
      const res = await fetch(`/api/myProjects`);
      const data = await res.json();
      setProjectList(data);
      console.log(projectList);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className="container">
      <h2 className={classes.title}>Projects</h2>
      <div className="row">
        {projectList === undefined || projectList.length < 1 ? (
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        ) : (
          projectList.map((list) => (
            <div className="col-4" key={list.id}>
              <a href={list.link} target="_blank" rel="noreferrer">
                <div className={classes.card}>
                  <div>
                    <Image
                      src={list.image}
                      alt={list.title}
                      layout="intrinsic"
                      width={412}
                      height={290}
                    />
                  </div>
                  <div className={classes.cardInner}>
                    <h5>{list.title}</h5>
                    <p>View Site</p>
                  </div>
                </div>
              </a>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
