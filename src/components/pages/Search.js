import React, { useState } from "react";
import Layout from "../../Layout";
import { TextField, Typography } from "@mui/material";
import './search.css'
import { useSelector } from "react-redux";

export default function Search(){
    const tokenData = useSelector(state => state.tokenData.value)
    const [searchVal, setSearchVal] = useState('');
    const [searchResult, setSerachResult] = useState({}) 
    function handleSubmit(e){
        e.preventDefault()
        console.log(searchVal)
        fetch(`https://api.spotify.com/v1/search?q=${searchVal}&type=track,artist,album,playlist,audiobook`, {
            method:"GET",
            headers:{
                'Authorization': `Bearer ${tokenData.access_token}`
            }
        })
        .then(r => r.json())
        .then(data => filteredData(data))
    }

    function filteredData(data){
        if (!data.error){
            const newData = {
                tracks:data.tracks.items,
                artists:data.artists.items,
                albums:data.albums.items,
                playlists:data.playlists.items,
                audiobooks:data.audiobooks.items
            }
            setSerachResult(newData)
        }
    }
console.log(searchResult)
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
            <div id="artistContainer" className="searchResContainer">
                <Typography variant='h4'>Artists:</Typography>
            </div>
            <div id="albumContainer" className="searchResContainer">
                <Typography variant='h4'>Albums:</Typography>
            </div>
            <div id="trackContainer" className="searchResContainer">
                <Typography variant="h4">Tracks:</Typography>
            </div>
            <div id="playlistContainer" className="searchResContainer">
                <Typography variant="h4">Playlists:</Typography>
            </div>
            <div id="audioBookContainer" className="searchResContainer">
                <Typography variant="h4">Auido Books:</Typography>
            </div>
        </div>
    )

    return (
        <Layout component={search}/>
    )
}