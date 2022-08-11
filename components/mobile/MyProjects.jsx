import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import classes from '../../styles/MyProjects.module.css';

export default function MyProjects() {
  const [projectList, setProjectList] = useState();

  async function getProjects() {
    try {
      const res = await fetch(`/api/myProjects`);
      const data = await res.json();
      setProjectList(data);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    getProjects();
  }, []);

  return (
    <div className={classes.projContainer}>
      {projectList === undefined || projectList.length < 1 ? (
        <div className="spinner-border text-warning" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        projectList.map((list) => (
          <a key={list.id} href={list.link} target="_blank" rel="noreferrer">
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
                <h2>{list.title}</h2>
                <p>View Site</p>
              </div>
            </div>
          </a>
        ))
      )}
    </div>
  );
}
