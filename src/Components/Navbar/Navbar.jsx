import React from 'react'
import BodyLayout from '../Reusable/BodyLayout/BodyLayout'
import styles from './navbar.module.css'

const Navbar = () => {
  return (
    <BodyLayout>
        <nav>
            <ul className={styles.navbar2}>
                <li>Restaurant</li>
                <li>Cottage</li>
                <li>Castle</li>
                <li>fantast city</li>
                <li>beach</li>
                <li>Carbins</li>
                <li>Off-Grid</li>
                <li>Farm</li>
                <li><input type="text" placeholder='Location' /></li>

            </ul>
        </nav>
    </BodyLayout>
    
  )
}

export default Navbar