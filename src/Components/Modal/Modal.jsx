import React from 'react'
import metamask2 from '../../assets/Landing-Page_Images/metamask2.png'
import wallet_connect from '../../assets/Landing-Page_Images/wallet_connect.png'
import useModal from '../../Hooks/useModal'
import styles from './modal.module.css'


const Modal = ({onModal}) => {

    
  return (
    <section className={styles.flex_modal}>
        <div className={styles.modal_content}>
        <article>
            <h3>Connect Wallet</h3>
            <button onClick={onModal}>X</button>
        </article>
        <p >Choose your preferred wallet:</p>
        <article>
            <img src={metamask2} alt="metamask" />
        </article>
        <article>
            <img src={wallet_connect} alt="wallet_connect" />
        </article>
        </div>
        
    </section>
  )
}

export default Modal