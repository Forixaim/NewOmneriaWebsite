import next from "next"
import React from "react"
import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import WikiDropdown from "./dropdown"
import { useUser } from "@auth0/nextjs-auth0"


const WikiNavBar = () => {
	const { user, error, isLoading } = useUser();

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error.message}</div>;
	return (
		<nav className="overflow-hidden bg-violet-900">
			<div>
				<Link href="../"><a className={styles.NavLink}>Home</a></Link>
				<Link href="wiki"><a className={styles.NavLink}>Archives Home</a></Link>
				<Link href="characters"><a className={styles.NavLink}>Characters</a></Link>
				<Link href="locations"><a className={styles.NavLink}>Locations</a></Link>
			</div>
		</nav>
	)
}
export default WikiNavBar