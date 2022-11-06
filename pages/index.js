import React from 'react';
import Head from "next/head";
import { useState } from "react";
import { Audio } from 'react-loader-spinner'
import styles from "./index.module.css";
import Select from 'react-select'
import options from '../options.js'
import Forms from './components/Help'
import Content from './components/Content'
import Link from 'next/link'

export default function Home() {

  return (
    <div>
    <Head>
      <title>Validaattori 2000</title>
      <link rel="icon" href="/KE.png" />
    </Head>
    

    <main className={styles.main}>
      <Content></Content>
    </main>
    </div>
  )
}
