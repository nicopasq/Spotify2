import React from "react";
import Profile from "../Profile";
import { useSelector } from "react-redux";

export default function Display() {
    const {component} = useSelector(state => state.displayComponent)
    return (
        <div>
        {component}
        </div>
    )
}