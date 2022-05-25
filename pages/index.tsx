import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'

const Home: NextPage = () =>
{
	return (
		<div>
			<Head>
				<title>Project: Omneria - Team Forixaim</title>
			</Head>
			<header><Navbar/></header>
			<main>
				<h1 className={styles.title}>Project: Omneria</h1>
				<p>Hey</p>
			</main>
		</div>
	)
}

export default Home
