import React from "react";
import './App.css';
import Display from "./components/display/Display";
import Links from "./components/navigation/Links";

export default function Layout({component}){
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
                <Display component={component}/>
            </div>
            <div id="playbackController">
                {/* <PlaybackControls/> */}
            </div>
        </div>
    )
}