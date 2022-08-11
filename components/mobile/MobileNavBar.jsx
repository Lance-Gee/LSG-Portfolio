import React, { useState } from 'react';
import ProfileSlider from './ProfileSlider';
import Link from 'next/link';

export default function MobileNavBar() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" onClick={() => setOpen(!open)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-three-dots-vertical"
              viewBox="0 0 16 16"
            >
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
            </svg>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item d-flex justify-content-end">
                <Link href="/">
                  <a className="nav-link" href="#">
                    Main
                  </a>
                </Link>
              </li>
              <li className="nav-item d-flex justify-content-end">
                <Link href="/blog">
                  <a className="nav-link" aria-current="page" href="#">
                    Blogs
                  </a>
                </Link>
              </li>
              <li className="nav-item d-flex justify-content-end">
                <Link href="/project">
                  <a className="nav-link" href="#">
                    Projects
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {open && <ProfileSlider />}
    </div>
  );
}
