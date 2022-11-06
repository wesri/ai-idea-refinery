
import React from 'react';
import Head from "next/head";
import { useState } from "react";
import { Audio } from 'react-loader-spinner'
import styles from "../index.module.css";
import Select from 'react-select'
import options from '../../options.js'
import Link from 'next/link'
import Button from 'react-bootstrap/Button';

export default function Landing({phase, setPhase}) {
  function nextPage(event) {
    event.preventDefault();
    setPhase(1);
  }
    return (
      <div className={styles.landing}>
        <div>
          <img src="/ke_white.png" className={styles.icon} />
        </div>
        <br></br>
        <div>
          <div className={styles.titleText}>IDEA REFINERY PLATFORM</div>
        </div>
        <div className={styles.landingdivider}></div>
        <div>
          <div className={styles.bigText}>Do you have an innovation you would like to assess?</div>
        </div>
        <div className={styles.landingdivider}></div>
        <div className={styles.nextbutton}>
          <Button variant="primary" onClick={nextPage}>Start your journey here →</Button>
        </div>
      </div>
    );
}
