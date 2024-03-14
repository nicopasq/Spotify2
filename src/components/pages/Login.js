import React, { useState } from "react";
import './login.css'

export default function Login(){
    const [display, setDisplay] = useState({display:'block'})

    function handleClick(e){
        e.preventDefault()
        setDisplay({display:'none'})
    }

    return (
        <div id="loginPage" style={display}>
            <a href="" onClick={handleClick}>
                Login to Spotify
            </a>
        </div>
    )
}