import type { NextPage } from 'next'
import { Canvas } from '@react-three/fiber'
import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/navbar'
import styles from '../styles/Home.module.css'
import Floor from '../components/Floor'
import Box from '../components/Box'
import LightBulb from '../components/LightBulb'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import CameraController from '../components/OrbitControls'
import Ball from '../components/Ball'

const Home: NextPage = () =>
{
	return (
		<div className="inline m-0">
			<Head>
				<title>Project: Omneria - Team Forixaim</title>
			</Head>
			<header><Navbar/></header>
			<main className="inline">
				<div className="flex justify-center bg-gradient-to-bl from-blue-900 to-blue-900 via-cyan-900 h-96 items-center">
					<Canvas shadows={true} className="bg-black" camera={{position: [-6, 42, 42],}}>
						<ambientLight color={"white"} intensity={0.3}/>
						<Ball/>
					</Canvas>
					<h1 className="text-9xl font-semibold flex m-aut0 text-white absolute text-center top-24">Project: Omneria</h1>
				</div>
				
				<h2 className="text-center text-6xl m-4 font-medium">Begin your journey across the cosmos</h2>
				<p className="text-center text-3xl m-4">Project: Omneria is an upcoming game developed by Team Forixaim, featuring a combat system that will change everything as well as fun and immersive overworld experience. It is more than an open-world RPG, it is a RPG metaverse!</p>
			</main>
		</div>
	)
}

export default Home
