
import React from 'react';
import Head from "next/head";
import { useState } from "react";
import { Audio } from 'react-loader-spinner'
import styles from "../index.module.css";
import Select from 'react-select'
import options from '../../options.js'
import Link from 'next/link'
import ProgressBar from 'react-bootstrap/ProgressBar';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function First({phase, setPhase, ideaInput, setIdeaInput}) {

    async function onSubmit(event) {
        event.preventDefault();
        setPhase(2);
      }
    return (
      <div>          
          <div className={styles.questionText}>Start by writing a short description of your business idea</div>
          <div className={styles.landingdivider}></div>
          <form className={styles.content} onSubmit={onSubmit}>
            <input
              type="text"
              name="inputidea"
              placeholder="Enter an idea"
              value={ideaInput}
              onChange={(e) => setIdeaInput(e.target.value)}
            />
<div className={styles.smalldivider}></div>
            <div className={styles.smallText}>
            "Food delivery platform for children"
            <br/>
            "Transporting christmas trees as a service"
            <br/>
            "Machine that prints out money"
          </div>
          <div className={styles.smalldivider}></div>
            <input type="submit" value="Start assessing my idea →" />
          </form>
          <div className={styles.landingdivider}></div>
          <ProgressBar now={20} variant="custom" />

      </div>
    );
}
