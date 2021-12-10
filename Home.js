import { useState } from "react";
import Data from "./modalForm";

const Home = () => {

    const [state, setState] = useState([{name:'Priyanka', email:'xyz@gmail.com', emplId:1}])
                              
    
    return(

        <>
           <h1>Employee App</h1> 

           <Data state={state} setState={setState}/>  

            {state.map((value) => (
                              <div>
                                  <p>{value.name}</p> 
                                  <p>{value.email}</p>
                                  <p>{value.emplId}</p>
                              </div>
                             ))} 

           
        </>
    )
}
export default Home;