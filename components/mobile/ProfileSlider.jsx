import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import classes from '../../styles/ProfileSlider.module.css';
import profilePic from '../../public/images/LanceProfilePic.png';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

export default function ProfileSlider() {
  const [loading, setLoading] = useState(true);
  const percentage1 = 100;
  const percentage2 = 90;
  const percentage3 = 65;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  });

  return (
    <div className={classes.mainDiv}>
      <div className={`container ${classes.outerDiv}`}>
        <div className={classes.topCard}>
          <div className={classes.profileImageDiv}>
            <div className={classes.pulsatingCircle}></div>
            <Image
              src={profilePic}
              alt="profilePic"
              layout="fixed"
              width={125}
              height={125}
              className={classes.profileImage}
            />
          </div>
          <div>
            <h1 className={classes.profileName}>Lance Gee</h1>
            <p className={classes.profileTitle}>Full-Stack Developer</p>
          </div>
        </div>
        <div className={`${classes.residence} pt-4 pb-4 ms-3`}>
          <div className="row">
            <div className="col-6">
              <p>Residence:</p>
            </div>
            <div className="col offset-2">
              <p style={{ color: '#797979' }}>Canada</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>Province:</p>
            </div>
            <div className="col offset-2">
              <p style={{ color: '#797979' }}>Alberta</p>
            </div>
          </div>
          <div className="row">
            <div className="col-6">
              <p>City:</p>
            </div>
            <div className="col offset-2">
              <p style={{ color: '#797979' }}>Calgary</p>
            </div>
          </div>
        </div>
        <hr className={classes.hr} />

        {loading ? (
          <div className="row pb-1 pt-3 ps-3 pe-3">
            <div className="col-4">
              <div
                className={`spinner-border text-warning ${classes.spinners} `}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
              <p style={{ marginLeft: '-5px', marginTop: '8px' }}>Ambitious</p>
            </div>
            <div className="col-4">
              <div
                className={`spinner-border text-warning ${classes.spinners} `}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
              <p style={{ marginLeft: '7px', marginTop: '8px' }}>Patient</p>
            </div>
            <div className="col-4">
              <div
                className={`spinner-border text-warning ${classes.spinners} `}
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
              <p style={{ marginLeft: '7px', marginTop: '8px' }}>Gamer</p>
            </div>
          </div>
        ) : (
          <div className="row pb-1 pt-3 ps-3 pe-3">
            <div className="col-4">
              <CircularProgressbar
                value={percentage1}
                text={`${percentage1}%`}
                strokeWidth={4}
                styles={buildStyles({
                  textColor: '#797979',
                  pathColor: '#ffc107',
                  trailColor: '#20202a',
                })}
              />
              <p style={{ marginLeft: '-5px', marginTop: '8px' }}>Ambitious</p>
            </div>
            <div className="col-4">
              <CircularProgressbar
                value={percentage2}
                text={`${percentage2}%`}
                strokeWidth={4}
                styles={buildStyles({
                  textColor: '#797979',
                  pathColor: '#ffc107',
                  trailColor: '#20202a',
                })}
              />
              <p style={{ marginLeft: '7px', marginTop: '8px' }}>Patient</p>
            </div>
            <div className="col-4">
              <CircularProgressbar
                value={percentage3}
                text={`${percentage3}%`}
                strokeWidth={4}
                styles={buildStyles({
                  textColor: '#797979',
                  pathColor: '#ffc107',
                  trailColor: '#20202a',
                })}
              />
              <p style={{ marginLeft: '7px', marginTop: '8px' }}>Gamer</p>
            </div>
          </div>
        )}
        <hr className={classes.hr} />
        <div className="row">
          <div className="col offset-1">
            <h6>HTML</h6>
          </div>
          <div className="col offset-4">
            <p style={{ color: '#797979' }}>100%</p>
          </div>
          <div className={classes.progressBarDiv1}>
            <div className={classes.progressBar}></div>
          </div>
        </div>
        <div className="row">
          <div className="col offset-1">
            <h6>CSS</h6>
          </div>
          <div className="col offset-4">
            <p style={{ color: '#797979' }}>90%</p>
          </div>
          <div className={classes.progressBarDiv2}>
            <div className={classes.progressBar}></div>
          </div>
        </div>
        <div className="row">
          <div className="col offset-1">
            <h6>Javascript</h6>
          </div>
          <div className="col offset-4">
            <p style={{ color: '#797979', marginLeft: '-10px' }}>70%</p>
          </div>
          <div className={classes.progressBarDiv3}>
            <div className={classes.progressBar}></div>
          </div>
        </div>
        <div className="row">
          <div className="col offset-1">
            <h6>ReactJs</h6>
          </div>
          <div className="col offset-4">
            <p style={{ color: '#797979' }}>75%</p>
          </div>
          <div className={classes.progressBarDiv4}>
            <div className={classes.progressBar}></div>
          </div>
        </div>
        <div className="row">
          <div className="col offset-1">
            <h6>Java</h6>
          </div>
          <div className="col offset-4">
            <p style={{ color: '#797979' }}>80%</p>
          </div>
          <div className={classes.progressBarDiv5}>
            <div className={classes.progressBar}></div>
          </div>
        </div>
        <div className="row">
          <div className="col-2 offset-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#FFC107"
              className="bi bi-check"
              viewBox="0 0 16 16"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
          </div>
          <div className="col-9">
            <p style={{ color: '#797979' }}>Bootstrap, Material UI</p>
          </div>
        </div>
        <div className="row">
          <div className="col-2 offset-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#FFC107"
              className="bi bi-check"
              viewBox="0 0 16 16"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
          </div>
          <div className="col-9">
            <p style={{ color: '#797979' }}>SQL Knowledge</p>
          </div>
        </div>
        <div className="row">
          <div className="col-2 offset-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#FFC107"
              className="bi bi-check"
              viewBox="0 0 16 16"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
          </div>
          <div className="col-9">
            <p style={{ color: '#797979' }}>MongoDB Knowledge</p>
          </div>
        </div>
        <div className="row">
          <div className="col-2 offset-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#FFC107"
              className="bi bi-check"
              viewBox="0 0 16 16"
            >
              <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z" />
            </svg>
          </div>
          <div className="col-9">
            <p style={{ color: '#797979' }}>GIT/Github</p>
          </div>
        </div>
        <hr className={classes.hr} />
        <div className={classes.resume}>
          <div className="row">
            <div className="col-8 offset-1">
              <p style={{ color: '#797979' }}>Download Resume</p>
            </div>
            <div className="col-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#FFC107"
                className="bi bi-download float-end"
                viewBox="0 0 16 16"
                style={{ display: 'inline' }}
              >
                <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
                <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
              </svg>
            </div>
          </div>
        </div>
        <div className={classes.footer}>
          <div className="row ps-3">
            <div className="col-3 pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#797979"
                className="bi bi-linkedin"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
              </svg>
            </div>
            <div className="col-3 pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#797979"
                className="bi bi-github"
                viewBox="0 0 16 16"
              >
                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
              </svg>
            </div>
            <div className="col-3 pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#797979"
                className="bi bi-envelope-fill"
                viewBox="0 0 16 16"
              >
                <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
              </svg>
            </div>
            <div className="col-3 pt-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#797979"
                className="bi bi-telephone-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
