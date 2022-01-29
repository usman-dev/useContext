import React, {useContext, useEffect} from "react";
import AppContext from "../../context/AppContext";

const SecondContext = () =>{
    const b = useContext(AppContext);
    useEffect(() =>{
        b.updateNext();
    }, []);

    return(
        <div>
            <h2>This is a Context for {b.newState.name} and course {b.newState.course} </h2>
            <p>This is {b.newName}</p>
        </div>
    )
}
export default SecondContext;