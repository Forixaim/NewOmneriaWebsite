import next from "next"
import React from "react"
import styles from '../styles/NavBar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import WikiDropdown from "./dropdown"
import Dropdown from "./dropdown"

const Navbar = () => {
	const options = [
		{ label: 'Fruit', value: 'fruit' },
		{ label: 'Vegetable', value: 'vegetable' },
		{ label: 'Meat', value: 'meat' },
	];

	const [value, setValue] = React.useState('fruit');

	return (
		<nav className={styles.NavBarColor}>
			<div>
				<Link href="/"><a className={styles.NavLink}>Home</a></Link>
				<Dropdown/>
				<Link href="contact"><a className={styles.NavLink}>Contact</a></Link>
				<Link href="donate"><a className={styles.NavLink}>Donate</a></Link>
				<Link href="about"><a className={styles.NavLink}>About</a></Link>
			</div>
		</nav>
	)
}
export default Navbar