import React from 'react'
import './header.css'
import logo from '../../../assets/Logos/Vector (1).png'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../../Modal/Modal'
import useModal from '../../../Hooks/useModal'







const Header = () => {
  const [toggle,setToggle] = useState(false)
  const {modalState,ModalShowHandler,ModalHideHandler}=useModal()
  

  const toggleHandler=()=>{
    setToggle(!toggle)
  }
  const HideModal=()=>{
    setToggle(false)
  }
  

  return (
    <header className='header'>
      
        <article>
            <img src={logo} alt="metabnblogo" />
            <h2>MetaBnb</h2>
        </article>
        <ul className='mobile_responsive'>
        <article>
            <img src={logo} alt="metabnblogo" />
            <h2>MetaBnb</h2>
        </article>
        <button onClick={toggleHandler}>{toggle?"-":"+"}</button>
      </ul>
      <ul className='tablet_responsive'>
        <article>
            <img src={logo} alt="metabnblogo" />
            <h2>MetaBnb</h2>
        </article>
        <button onClick={toggleHandler}>{toggle?"-":"+"}</button>
        <button onClick={ModalShowHandler}>Connect Wallet</button>
      </ul>
        
        <nav>
            <ul className='navbar'>
            <li><Link to="home">Home</Link></li>
                <li><Link to="place_to_stay">Place_To_Stay</Link></li>
                <li><a href="#">Nft</a></li>
                <li><a href="#">Community</a></li>
                <button onClick={ModalShowHandler}>Connect Wallet</button>
            </ul>
            {toggle&&(
            <ul className={toggle?"navbar2":""}>
                <li><Link to="home">Home</Link></li>
                <li><Link to="place_to_stay">Place_To_Stay</Link></li>
                <li><a href="#">Nft</a></li>
                <li><a href="#">Community</a></li>
                <button onClick={ModalShowHandler}>Connect Wallet</button>
            </ul>
            )}
            {toggle&&(
            <ul className={toggle?"navbar3":""}>
                <li><Link to="home">Home</Link></li>
                <li><Link to="place_to_stay">Place_To_Stay</Link></li>
                <li><a href="#">Nft</a></li>
                <li><a href="#">Community</a></li>
            </ul>
            )}
        </nav>
        
       {modalState&&<Modal onModal={ModalHideHandler}/>}
    </header>
  )
}

export default Header