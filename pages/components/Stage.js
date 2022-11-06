
import React from 'react';
import Head from "next/head";
import { useState } from "react";
import { Audio } from 'react-loader-spinner'
import styles from "../index.module.css";
import Select from 'react-select'
import options from '../../options.js'
import Link from 'next/link'
import ToggleButton from '@mui/material/ToggleButton';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Stage({idea, setIdea, proto, setProto, business, setBusiness, phase, setPhase}) {
  
  function nextPage(event) {
    event.preventDefault();
    setPhase(4);
  }

  return (
    <div>
      <div className={styles.questionText}>What stage are you in?</div>
      <div className={styles.smalldivider}></div>
      <div className={styles.checkbutton}>
      <div className={styles.checkbutton}>
        <ToggleButton
          value="check"
          className={styles.orangetoggle}
          selected={idea}
          onChange={() => {
            setIdea(true);
            setProto(false);
            setBusiness(false);
          }}
        >
          <div className={styles.stagebox}>
            <img src="/idea.png" className={styles.icon} />

            <div className={styles.stageboxtitle}>Idea stage</div>
            <div>You've perhaps done some research but I don't have anything planned yet.</div>
          </div>
        </ToggleButton>
        </div>
        <div className={styles.checkbutton}>
          <ToggleButton
            value="check"
            className={styles.orangetoggle}
            selected={proto}
            onChange={() => {
              setIdea(false);
              setProto(true);
              setBusiness(false);
            }}
          >
            <div className={styles.stagebox}>
              <img src="/proto.png" className={styles.icon} />

              <div className={styles.stageboxtitle}>Prototype</div>
              <div>You have conducted some testing and already have something concrete. A website, prototype, an MVP.</div>
            </div>
          </ToggleButton>
        </div>
        <div className={styles.checkbutton}>
          <ToggleButton
            value="check"
            className={styles.orangetoggle}
            selected={business}
            onChange={() => {
              setIdea(false);
              setProto(false);
              setBusiness(true);
            }}
          >
            <div className={styles.stagebox}>
              <img src="/business.png" className={styles.icon} />

              <div className={styles.stageboxtitle}>Business</div>
              <div>I already have an early stage business.</div>
            </div>
          </ToggleButton>
        </div>
      </div>
      <div className={styles.smalldivider}></div>

      <div className={styles.nextbutton}>
        <Button variant="primary" onClick={nextPage}>Next →</Button>
      </div>
      <div className={styles.smalldivider}></div>

      <ProgressBar now={60} variant="custom" />

    </div>
  );
}
