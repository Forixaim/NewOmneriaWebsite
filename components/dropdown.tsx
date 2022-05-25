import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import dropdownStyles from '../styles/WikiDropdown.module.css'
import Link from 'next/link'

const WikiDropdown = () => {
	return (
		<div className={dropdownStyles.dropdown}>
			<button className={dropdownStyles.dropbtn}>Wiki</button>
			<div className={dropdownStyles.dropcontent}>
				<Link href="wiki/characters/"><a>Characters</a></Link>
				<Link href="wiki/locations/"><a>Locations</a></Link>
				<Link href="wiki/equipment/"><a>Equipment</a></Link>
			</div>
		</div>
	)
};

export default WikiDropdown