import React from "react";
import './App.css';

export default function Layout(){
    return (
        <div id='appLayout'>
            <div id="navContainer">
            <div id="sideBar1"></div>
            <div id="sideBar2"></div>
            </div>
            <div id="mainDisplay"></div>
            <div id="playbackController"></div>
        </div>
    )
}