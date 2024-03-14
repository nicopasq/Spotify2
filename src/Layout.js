import React from "react";
import './App.css';
import Links from "./components/Links";
import Display from "./components/display/Display";

export default function Layout(){
    return (
        <div id='appLayout'>
            <div id="navContainer">
            <div id="sideBar1">
                <Links/>
            </div>
            <div id="sideBar2">
                {/* <Media/> */}
            </div>
            </div>
            <div id="mainDisplay">
                <Display/>
            </div>
            <div id="playbackController">
                {/* <PlaybackControls/> */}
            </div>
        </div>
    )
}