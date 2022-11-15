import React from 'react'
import styles from './landing.module.css'
import nfts from '../../assets/Landing-Page_Images/nfts.png'
import GridLayout from '../Reusable/GridLayout/GridLayout'


const Landing = () => {
    const{grid_container,flex_container}= styles
  return (
    <GridLayout double_grid='yes'>
    
            <article className={grid_container}>
        <h2>
            Rent a <strong>Place</strong> away from <strong>Home</strong>
            &nbsp;in the <strong>Metaverse</strong>
        </h2>
        <p>we provide you access to luxury and affordable houses in the metaverse, get a chance to turn your imagination to reality at your comfort zone</p>
        <form>
            <input type="text" placeholder='Search For Location' />
            <button>Search</button>
        </form>
        </article>
        <article className={grid_container}>
            <img src={nfts} alt="nfts" />
        </article>
    
    

    </GridLayout>
  )
}

export default Landing