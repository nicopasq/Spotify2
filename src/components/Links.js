import { Link, Paper } from "@mui/material";
import React from "react";
import "../App.css";

export default function Links() {
  return (
    <Paper elevation={4} id="linkNav">
      <div className="linkNavButton">
        <Link href={"/"}>Profile</Link>
      </div>
      <div className="linkNavButton">
        <Link href={"/search"}>Search</Link>
      </div>
    </Paper>
  );
}
