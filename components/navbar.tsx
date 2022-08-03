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
		<nav className="overflow-hidden bg-violet-900">
			<div>
				<Link href="/"><a className={styles.NavLink}>Home</a></Link>
				<Link href="/wiki/"><a className={styles.NavLink}>Archives</a></Link>
				<Link href="store"><a className={styles.NavLink}>Store</a></Link>
				<a href="https://www.forixaim.net/" className={styles.NavLink}>Forixaim</a>
			</div>
		</nav>
	)
}
export default Navbar