
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

export default function Industry({phase, setPhase, selectedIndustry, setSelectedIndustry}) {

  function nextPage(event) {
    event.preventDefault();
    setPhase(5);
  }

  function handleChange(value) {
    setSelectedIndustry(value.value)
  }

  const customStyles = {
    option: (provided) => ({
      ...provided,
      color: 'black',
      padding: 20,
      backgroundColor: 'white'
    }),

    control: (base) => ({
      ...base,
      borderColor: 'orange',
      '&:hover': { borderColor: '#f6872d' }
  })
  }
  return (
    <div>
      <div className={styles.questionText}>What is the industry your business works in?</div>
      <div className={styles.smalldivider}></div>
      <div>
      <Select styles={customStyles} onChange={handleChange} options={options} />
      </div>
      <div className={styles.landingdivider}></div>

      <div className={styles.nextbutton}>
      <Button variant="primary" onClick={nextPage}>Next →</Button>
      </div>
      <div className={styles.smalldivider}></div>
      
      <ProgressBar now={75} variant="custom" />
    </div>
  );
}
