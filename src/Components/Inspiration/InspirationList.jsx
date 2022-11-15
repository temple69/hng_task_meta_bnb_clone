import React from 'react'
import nft from '../../assets/inspiration/img_1.png'
import styles from './inspiration.module.css'
import star from '../../assets/Logos/stars.png'

const InspirationList = ({imgurl}) => {
    const{two_layout,figure}=styles
  return (
    <figure className={figure}>
        <img src={imgurl} alt="nfts"/>
        <figcaption className={two_layout}>
            <p>Desert king</p>
            <h4>1MBT per night</h4>
            <p>2345km away</p>
            <p>available for 2weeks stay</p>
            <img src={star} alt="" />
        </figcaption>
    </figure>
  )
}

export default InspirationList