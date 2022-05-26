import next from "next"
import React from "react"
import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import WikiDropdown from "./dropdown"

const Navbar = () => {
	return (
		<nav className={styles.NavBarColor}>
			<div>
				<Link href="/"><a className={styles.NavLink}>Home</a></Link>
				<WikiDropdown/>
				<Link href="contact"><a className={styles.NavLink}>Gallery</a></Link>
				<Link href="donate"><a className={styles.NavLink}>Store</a></Link>
				<Link href="https://www.forixaim.net/"><a className={styles.NavLink}>Forixaim</a></Link>
			</div>
		</nav>
	)
}
export default Navbar