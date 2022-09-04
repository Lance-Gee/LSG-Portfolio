import React from 'react';
import classes from '../../styles/SummaryDesktop.module.css';

export default function Summary() {
  return (
    <div className="ms-3 mt-3">
      <div className="row">
        <div className="col-1">
          <h1 className={classes.headerFont}>15+</h1>
        </div>
        <div className='col'>
          <p className={`${classes.subTitle}`} style={{marginLeft: '5px'}}>Years experience in Oil &amp; Gas</p>
        </div>
        <div className="col-1">
          <h1 className={classes.headerFont}>2</h1>
        </div>
          <div className='col'>
          <p className={classes.subTitle}>
            SAIT Diploma&apos;s
            <br />
            Computer Engineering
            <br />
            Software Development
          </p>
        </div>
        <div className="col-1">
          <h1 className={classes.headerFont}>8</h1>
        </div>
        <div className='col'>
          <p className={classes.subTitle}>Completed Projects</p>
        </div>
        <div className="col-1">
          <h1 className={classes.headerFont}>3</h1>
        </div>
        <div className='col'>
          <p className={classes.subTitle}>Beautiful Children</p>
        </div>
      </div>
      
    </div>
  );
}
