import React, { useEffect, useState } from "react";
import getNowPlayingItem from "./SpotifyApi";
import styled from "styled-components";

function SpotifyPlayer(props) {
  const [result, setResult] = useState({});

  useEffect(() => {
    Promise.all([
      getNowPlayingItem(
        process.env.SPOTIFY_CLIENT_ID,
        process.env.SPOTIFY_CLIENT_SECRET,
        process.env.SPOTIFY_REFRESH_TOKEN,
      ),
    ]).then((results) => {
      setResult(results[0]);
    });
  }, []);

  return result.isPlaying ? (
    <div className="nowplayingcard">
      <div className="nowplayingcontainer-inner">
        <img id="trackart" src={result.albumImageUrl}></img>
        <div className="trackInfo">
          <a id="tracktitle">{result.title}</a>
          <a href="#" id="trackartist">
            {result.artist}
          </a>
        </div>
      </div>
    </div>
  ) : (
    <div>Not playing</div>
  );
}

export default SpotifyPlayer;
