import React from 'react'
import { PlacesData } from '../../StaticData/Staticdata'
import InspirationList from '../Inspiration/InspirationList'
import BodyLayout from '../Reusable/BodyLayout/BodyLayout'

import GridLayout from '../Reusable/GridLayout/GridLayout'





const Places = () => {
  return (
    <BodyLayout>
    <GridLayout>
        {PlacesData.map(data=>(
            <InspirationList 
            key={data.id}
            imgurl={data.imgurl}/>
        ))}

    </GridLayout>
    </BodyLayout>
    
  )
}

export default Places