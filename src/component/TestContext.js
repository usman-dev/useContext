import React, {useContext, useEffect} from "react";
import AppContext from "../context/AppContext";

const TestContext = () =>{
    const a = useContext(AppContext);
    useEffect(() =>{
        a.update();
    }, []);

    return(
        <div>
            <h2>This is a Context for {a.state.name} and course {a.state.course} </h2>
        </div>
    )
}
export default TestContext;