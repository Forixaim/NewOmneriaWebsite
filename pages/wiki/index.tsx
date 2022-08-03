import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import WikiNavBar from '../../components/dropdown'
import Navbar from '../../components/navbar'

const Home: NextPage = () => {
	return (
		<div>
			<Head>
				<title>Project: Omneria - Team Forixaim</title>
			</Head>
			<header>
				<WikiNavBar/>
			</header>
			<main>
				<p>Hey</p>
			</main>
		</div>
	)
}

export default Home