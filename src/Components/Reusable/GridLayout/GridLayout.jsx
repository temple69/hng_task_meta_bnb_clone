import styles from './gridlayout.module.css'

const GridLayout = ({children,double_grid,height}) => {
  return (
    <div className={double_grid==="yes"?styles.double_grid_layout:styles.four_grid_layout}>
        {children}
    </div>
  )
}

export default GridLayout