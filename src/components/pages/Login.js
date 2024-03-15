import React, { useState } from "react";
import './login.css'
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";

export default function Login(){
    const params = new URLSearchParams(window.location.search)
    const code = params.get('code') || undefined
    const [display, setDisplay] = useState({display:'block'})
    const navigate = useNavigate()
    const dispatch = useDispatch()

    if (code !== undefined){
        fetch('http://localhost:3001/callback', {
            method:"POST",
            headers:{
                "Content-type":"application/json"
            },
            body:JSON.stringify({code: code})
        })
        .then(r => r.json())
        .then(data => {
            if (data.access_token){
                navigate('/profile')
                dispatch({type:'tokenData/setTokenData', payload:data})
            }
        })
    }

    return (
        <div id="loginPage" style={display}>
            <Button id="loginBtn" href="http://localhost:3001/login">
                Login to Spotify
            </Button>
        </div>
    )
}