import React, { useState } from "react";
import Layout from "../../Layout";
import { TextField } from "@mui/material";
import './search.css'

export default function Search(){
    const [searchVal, setSearchVal] = useState('');

    function handleSubmit(e){
        e.preventDefault()
        console.log(searchVal)
    }


    const search = (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                id="searchInput"
                type="text"
                placeholder="Search for a song, album, or artist"
                value={searchVal}
                onChange={(e) => setSearchVal(e.target.value)}/>
            </form>
        </div>
    )

    return (
        <Layout component={search}/>
    )
}