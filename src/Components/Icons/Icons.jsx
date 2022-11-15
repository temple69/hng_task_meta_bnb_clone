import opensea from '../../assets/Landing-Page_Images/opensea.png'
import metamask from '../../assets/Landing-Page_Images/metamask.png'
import mbtoken from '../../assets/Landing-Page_Images/mbtoken.png'
import styles from "./icons.module.css"
const Icons = () => {
    const{flex_container}= styles
  return (
    <div className={flex_container}>
        <img src={mbtoken} alt="mbtoken" />
        <img src={metamask} alt="metamask" />
        <img src={opensea} alt="opensea" />
    </div>
  )
}

export default Icons