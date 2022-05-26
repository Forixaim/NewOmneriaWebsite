import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () =>
{
	return (
		<div className={styles.container}>
			<Head>
				<title>Project: Omneria - Team Forixaim</title>
			</Head>
			<header><Navbar/></header>
			<main className={styles.main}>
				<h1 className={styles.title}>Project: Omneria</h1>
				<h2 className={styles.subtitle}>Begin your journey across the cosmos</h2>
				<p className={styles.description}>Project: Omneria is an upcoming game developed by Team Forixaim, featuring a combat system that will change everything as well as fun and immersive overworld experience. It is more than an open-world RPG, it is a RPG metaverse!</p>
			</main>
		</div>
	)
}

export default Home
