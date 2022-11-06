
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
import Box from '@mui/material/Box';

export default function Dashboard({phase, setPhase, risks, ideaInput, city, industry}) {
  return (
    <div>
      <div>
        <img src="/ke_logo.png" className={styles.icon} />
      </div>
      <br></br>
      <div>
        <div className={styles.titleTextOrange}>IDEA REFINERY PLATFORM</div>
      </div>
      <br></br>
      <div className={styles.smallText}>This is your unique support dashboard based on your innovation.</div>
      <div className={styles.smalldivider}></div>
      <div className={styles.feedbackbox}>
        <Box sx={{ p: 2, border: '1px dashed orange' }}>
          <div className={styles.titleTextOrange}>AI-powered assesment for your idea: {ideaInput}</div>
          <br></br>
          <div className={styles.smallText}>{risks}</div>
        </Box>
      </div>
      <div className={styles.smalldivider}></div>
      <div className={styles.feedbackbox}>
        <Box sx={{ p: 2, border: '1px dashed orange' }}>
          <div className={styles.titleTextOrange}>Your location: {city}</div>
          <br></br>
          <div className={styles.smallText}>If you need help with your business plan you can reserve a time with your local business advisor.</div>
        </Box>
      </div>
      <div className={styles.smalldivider}></div>
      <div className={styles.feedbackbox}>
        <Box sx={{ p: 2, border: '1px dashed orange' }}>
          <div className={styles.titleTextOrange}>Top mentors for your idea ({industry})</div>
          <br></br>
        </Box>
      </div>
    </div>
  );
}
