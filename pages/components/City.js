
import React from 'react';
import Head from "next/head";
import { useState } from "react";
import { Audio } from 'react-loader-spinner'
import styles from "../index.module.css";
import Select from 'react-select'
import cities from '../../cities.js'
import Link from 'next/link'
import ToggleButton from '@mui/material/ToggleButton';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function City({phase, setPhase, city, setCity}) {
  function nextPage(event) {
    event.preventDefault();
    setPhase(6);
  }

  function handleChange(value) {
    setCity(value.value)
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
      <div className={styles.questionText}>Last step! Where are you located?</div>
      <div className={styles.smalldivider}></div>
      <div>
      <Select styles={customStyles} onChange={handleChange} options={cities} />
      </div>
      <div className={styles.landingdivider}></div>

      <div className={styles.nextbutton}>
      <Button variant="primary" onClick={nextPage}>Next →</Button>
      </div>
      <div className={styles.smalldivider}></div>
      
      <ProgressBar now={90} variant="custom" />
    </div>
  );
}
