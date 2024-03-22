import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Layout from "../../Layout";
import { useNavigate } from "react-router";

export default function Profile() {
  const tokenData = useSelector((state) => state.tokenData.value);
  const navigate = useNavigate()

  const [profileData, setProfileData] = useState({
    display_name: "",
    followers:{
      total:0
    },
    email: "",
    country: "",
    external_urls: "",
    product: "",
  });

  useEffect(() => {
    if (tokenData?.access_token) {
      const { access_token } = tokenData;
      fetch("https://api.spotify.com/v1/me", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      })
        .then((r) => r.json())
        .then((data) => setProfileData(data));
    }
  }, [tokenData]);

  const profileComponent = (
    <div>
      <h2>
        {profileData.display_name} | Followers: {profileData.followers.total}
      </h2>
      <h4>Email: {profileData.email}</h4>
      <h4>Country: {profileData.country}</h4>
      <h4>
        Spotify Link:{" "}
        <a href={profileData.external_urls.spotify}>
          {profileData.external_urls.spotify}
        </a>
      </h4>
      <h4>Subscribtion: Spotify {profileData?.product}</h4>
    </div>
  );

  const noProfile = (
    <div>
      <h1>Loading....</h1>
    </div>
  )

  const render = tokenData ? profileComponent : noProfile

  if (render === noProfile){
    setTimeout(() => {
      navigate('/')
    }, 3500)
  }

  return <Layout component={render} />;
}
