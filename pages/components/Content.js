
import React from 'react';
import Head from "next/head";
import { useState } from "react";
import { Audio } from 'react-loader-spinner'
import styles from "../index.module.css";
import Select from 'react-select'
import options from '../../options.js'
import Link from 'next/link'
import Help from './Help'
import First from './First'
import Landing from './Landing'
import Stage from './Stage'
import Industry from './Industry'
import City from './City'
import Dashboard from './Dashboard'

export default function Content() {
  const [phase, setPhase] = useState(0);
  const [ideaInput, setIdeaInput] = useState("");
  const [assess, setAssess] = useState(false);
  const [patent, setPatent] = useState(false);
  const [funding, setFunding] = useState(false);
  const [team, setTeam] = useState(false);
  const [legal, setLegal] = useState(false);
  const [idea, setIdea] = useState(false);
  const [proto, setProto] = useState(false);
  const [business, setBusiness] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState("No industry selected");
  const [city, setCity] = useState("Espoo");
  const [risks, setRisks] = useState("");
  const [loading, setLoading] = useState(false);
  
  async function loadData() {
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ idea: ideaInput }),
    });
    const data = await response.json();
    setRisks(data.result);
    setPhase(7)
  }

  if (phase == 0) {
    return (
      <Landing phase={phase} setPhase={setPhase}/>
    );
  } else if (phase == 1) {
    return (
      <First phase={phase} setPhase={setPhase} ideaInput={ideaInput} setIdeaInput={setIdeaInput}/>
    );
  } else if (phase == 2) {
    return (
      <Help assess={assess} setAssess={setAssess}
        patent={patent} setPatent={setPatent}
        funding={funding} setFunding={setFunding}
        team={team} setTeam={setTeam}
        legal={legal} setLegal={setLegal}
        phase={phase} setPhase={setPhase}
      />
    );

  } else if (phase == 3) {
    return(
    <Stage idea={idea} setIdea={setIdea}
    proto={proto} setProto={setProto}
    business={business} setBusiness={setBusiness}
    phase={phase} setPhase={setPhase}
  />
    )
  } else if (phase == 4) {
    return(
      <Industry phase={phase} setPhase={setPhase}
        selectedIndustry={selectedIndustry}
        setSelectedIndustry={setSelectedIndustry}
      />
    );
  } else if (phase == 5) {
    return(
      <City phase={phase} setPhase={setPhase}
        city={city} setCity={setCity}
     />
    );
  } else if (phase == 6) {
    if (!loading) {
      setLoading(true)
      loadData()
    }
    
    return (
      <div className={styles.landing}>
        <div className={styles.landingdivider}></div>
        <div>
          <div className={styles.bigText}>Creating your personal support dashboard and idea assessment</div>
        </div>
        <div className={styles.landingdivider}></div>
        <Audio
            height="80"
            width="200"
            radius="9"
            color="white"
            ariaLabel="loading"
            wrapperStyle
            wrapperClass
          />

      </div>
    );
  }else if (phase == 7) {
    return(
      <Dashboard phase={phase} setPhase={setPhase} risks={risks} ideaInput={ideaInput} city={city} industry={selectedIndustry}/>
    );
  }
  
}
