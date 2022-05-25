import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import dropdownStyles from '../styles/WikiDropdown.module.css'

function classNames(..._classes: string[]){
	return _classes.filter(Boolean).join(' ')
}

function pullDropDown()
{

}

let label: string

const WikiDropdown = () => {
	return (
		<div className={dropdownStyles.dropdown}>
				<button className={dropdownStyles.dropbtn}>Dropdown
					<i className="fa fa-caret-down"></i>
			</button>
			<div className={dropdownStyles.dropcontent}>
					<a href="#">Link 1</a>
					<a href="#">Link 2</a>
					<a href="#">Link 3</a>
				</div>
			</div>
	)
};

export default WikiDropdown