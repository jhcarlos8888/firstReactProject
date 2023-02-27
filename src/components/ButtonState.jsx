import { useState } from "react";


const ButtonState = () =>{
   
    
    const [stateNumber, stateFunction] = useState(0);
    

    const handleClick = () => {
        
        stateFunction(stateNumber + 1);

    };

    return(
     
        <button onClick={handleClick}>ButtonOfState: {stateNumber}</button>
        
    )

};


export default ButtonState;