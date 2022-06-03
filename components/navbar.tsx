import next from "next"
import React from "react"
import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import WikiDropdown from "./dropdown"
import { useUser } from "@auth0/nextjs-auth0"


const Navbar = () => {
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;
	return (
		<nav className={styles.NavBarColor}>
			<div>
				<Link href="/"><a className={styles.NavLink}>Home</a></Link>
				<WikiDropdown/>
				<Link href="contact"><a className={styles.NavLink}>Gallery</a></Link>
				<Link href="donate"><a className={styles.NavLink}>Store</a></Link>
				<Link href="https://www.forixaim.net/"><a className={styles.NavLink}>Forixaim</a></Link>
				<Link href="/api/auth/login"><a className={styles.RightNavLink}>Sign In</a></Link>
				<Link href="/api/auth/logout"><a className={styles.RightNavLink}>Sign Out</a></Link>
			</div>
		</nav>
	)
}
export default Navbar