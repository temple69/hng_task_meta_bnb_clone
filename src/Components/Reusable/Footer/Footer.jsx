import React from 'react'
import styles from './footer.module.css'
import second_vector from '../../../assets/Logos/footer_vector.png'
import facebook from '../../../assets/Logos/facebook.png'
import instagram from '../../../assets/Logos/instagram.png'
import twitter from '../../../assets/Logos/twitter.png'

const Footer = () => {
    const {footer_nav} = styles
  return (
<footer className={footer_nav}>

    <div>
        <article>
            <img src={second_vector} alt="second_vector_image" />
            <h2>MetaBnb</h2>
        </article>
        <article>
        <img src={facebook} alt="facebook" />
        <img src={instagram}alt="instagram" />
        <img src={twitter} alt="twitter" />
        </article>
        <p>&copy; 2022 Metabnb</p>
    </div>
    <ul>
        <h3>Community</h3>
        <li>NFT</li>
        <li>Tokens</li>
        <li>Landlords</li>
        <li>Discord</li>
    </ul>
    <ul>
        <h3>Places</h3>
        <li>Castle</li>
        <li>Farms</li>
        <li>Beaches</li>
        <li>Learn More</li>
    </ul>
    <ul>
        <h3>About Us</h3>
        <li>Roadmap</li>
        <li>Craetors</li>
        <li>Career</li>
        <li>Contact Us</li>
    </ul>
</footer>
  )
}

export default Footer