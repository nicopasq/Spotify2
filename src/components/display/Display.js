import React from "react";
import Profile from "../Profile";
import { useSelector } from "react-redux";

export default function Display({component}) {
    return (
        <div>
            {component}
        </div>
    )
}