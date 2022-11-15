import React from 'react'


const BodyLayout = ({children}) => {
  return (
    <section style={{
        padding:"1em 2em",
}}>
        {children}
    </section>
  )
}

export default BodyLayout