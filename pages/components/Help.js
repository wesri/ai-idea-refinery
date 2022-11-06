
import React from 'react';
import Head from "next/head";
import { useState } from "react";
import { Audio } from 'react-loader-spinner'
import styles from "../index.module.css";
import Select from 'react-select'
import options from '../../options.js'
import Link from 'next/link'
import ToggleButton from '@mui/material/ToggleButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Help({ assess, setAssess, patent, setPatent, funding, setFunding, team, setTeam, legal, setLegal, phase, setPhase }) {
  function nextPage(event) {
    event.preventDefault();
    setPhase(3);
  }

  const theme = createTheme({
    palette: {
      primary: {
        main: '#000000',
      },
      secondary: {
        main: '#f6872d',
      },
    },
  });

  return (
      <div>
        <div className={styles.questionText}>Sounds great! What do you need help with?</div>
        <div className={styles.smalldivider}></div>
          <div className={styles.checkbutton}>
        
          
      <ToggleButton
        value="check"
        className={styles.orangetoggle}
        selected={assess}
        color="warning"
        onChange={() => {
          setAssess(!assess);
        }}
      >
        Assessing the idea
      </ToggleButton>
        </div>
        <div className={styles.checkbutton}>
      <ToggleButton
        value="check"
        className={styles.orangetoggle}
        selected={patent}
        color="warning"
        onChange={() => {
          setPatent(!patent);
        }}
      >
        Filing a patent
      </ToggleButton>
      </div>
        <div className={styles.checkbutton}>
      <ToggleButton
        value="check"
        className={styles.orangetoggle}
        selected={funding}
        color="warning"
        onChange={() => {
          setFunding(!funding);
        }}
      >
        Funding
      </ToggleButton>
      </div>
        <div className={styles.checkbutton}>
      <ToggleButton
        value="check"
        className={styles.orangetoggle}
        selected={team}
        color="warning"
        onChange={() => {
          setTeam(!team);
        }}
      >
        Finding team members
      </ToggleButton>
      </div>
        <div className={styles.checkbutton}>
      <ToggleButton
        value="check"
        className={styles.orangetoggle}
        selected={legal}
        color="warning"
        onChange={() => {
          setLegal(!legal);
        }}
      >
        Legal help
      </ToggleButton>
      </div>

      <div className={styles.smalldivider}></div>

      <div className={styles.nextbutton}>
      <Button variant="primary" onClick={nextPage}>Next →</Button>
      </div>
      <div className={styles.smalldivider}></div>
      
      <ProgressBar now={40} variant="custom" />
      </div >
    );
}
