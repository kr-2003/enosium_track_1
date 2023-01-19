import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Front from '../components/Front'
import { createContext, useContext, useState } from 'react'



export default function Home() {
  return (
    <>
      <Header></Header>
      <Front></Front>
    </>
  )
}
