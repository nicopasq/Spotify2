import React from "react";
import './login.css'
import { Button } from "@mui/material";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";

export default function Login(){
    const params = new URLSearchParams(window.location.search)
    const code = params.get('code') || undefined
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
                dispatch({type:'tokenData/setTokenData', payload:data})
                navigate('/profile')
            }
        })
    }

    return (
        <div id="loginPage">
            <Button id="loginBtn" href="http://localhost:3001/login">
                Login to Spotify
            </Button>
        </div>
    )
}