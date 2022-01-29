import { useState } from "react";
import AppContext from "./AppContext";


const AppState = (props)=>{

    const s1 = {
        "name" : "Usman",
        "course" : "CS"
    }
    // const s2 = {
    //     "name" : "Ahmed",
    //     "course" : "ACCA"
    // }
    const [state, setState] = useState(s1);
    const update = () =>{
        setTimeout(() => {
            setState({
                "name" : "Bilal",
                "course" : "BBA"
            })
        }, 1200);
    }
    const [newState, setnewState] = useState(s1);
    const updateNext = () =>{
        setTimeout(() => {
            setnewState({
                "name" : "Umar",
                "course" : "MPA"
            })
        }, 2500);
    }

    const newName = "Mani";

    return(
        <AppContext.Provider value={{state, newState, update, updateNext, newName}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppState;