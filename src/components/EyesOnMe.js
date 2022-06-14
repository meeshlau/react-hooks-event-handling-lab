// Code EyesOnMe Component Here
import React from "react";

function EyesOnMe() {
    function handleFocus(e) {
        if (e.type === 'focus') {
            console.log("Good!")
        } 
        else if (e.type === "blur") {
            console.log("Hey! Eyes on me!")
        }
        }

    return (
        <button onFocus={handleFocus} onBlur={handleFocus}>"Eyes on me"</button>
    )
}


export default EyesOnMe