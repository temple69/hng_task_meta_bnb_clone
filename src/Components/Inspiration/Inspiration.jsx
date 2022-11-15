import { inspirationData } from "../../StaticData/Staticdata"
import BodyLayout from "../Reusable/BodyLayout/BodyLayout"
import GridLayout from "../Reusable/GridLayout/GridLayout"
import InspirationList from "./InspirationList"


const Inspiration = () => {
  return (
    <BodyLayout>
        <h2 style={{
            textAlign:'center',
            marginBottom:'1em'
        }}>Inspiration for your next adventure</h2>
        <GridLayout>
            {inspirationData.map(data=>(
                <InspirationList 
                key={data.id}
                imgurl={data.imgurl}/>
            ))}

        </GridLayout>
    </BodyLayout>
  )
}

export default Inspiration