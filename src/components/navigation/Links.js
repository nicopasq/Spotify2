import { Paper } from "@mui/material";
import React from "react";
import "../../App.css";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Links() {
  return (
    <Paper elevation={4} id="linkNav">
      <div className="linkNavButton">
        <Link to={"/profile"}>Profile</Link>
      </div>
      <div className="linkNavButton">
        <Link to={"/search"}>Search</Link>
      </div>
    </Paper>
  );
}
