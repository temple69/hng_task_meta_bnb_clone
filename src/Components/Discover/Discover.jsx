
import styles from './discover.module.css'
import stacked from '../../assets/Landing-Page_Images/stacked.png'

const Discover = () => {
    const{discover_grid_layout}= styles
  return (
    

        <div className={discover_grid_layout}>
            
            <article>
                <h1>Metabnb NFTs</h1>
                <p>Discover our NFT gift cards collection. Loyal customers gets amazing gift cards which are traded as NFTs. These NFTs gives our cutomer access to loads of our exclusive services.</p>
                <button>Learn more</button>
            </article>
            <article>
            <img src={stacked} alt="stacked-picture" />
            </article>
        </div>
    
  )
}

export default Discover