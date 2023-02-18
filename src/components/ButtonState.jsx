import { useState } from "react";


const ButtonState = () =>{
   
    
    const arrayUseState = useState(1);
    
    const stateNumber = arrayUseState[0];

    const stateFunction = arrayUseState[1];


    const handleClick = () => {
        
        stateFunction(stateNumber + 1);

    };

    return(
     
        <button onClick={handleClick}>ButtonOfState: {stateNumber}</button>
        
    )

};


export default ButtonState;