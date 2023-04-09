// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
// const token =
//   "BQBcLguBqe3prmzD035kmT7CtWYdBj9Kxaje7Tlfg7DACyVnYufvK1hfgEzzWJ-u93Ig8YulophniDBdvfWwQIQIDEvh7OkABuWZVjqZILb5zkDv9_A2EIPb_yImf-sC3TF5nuSHS7hz1dkTf3HoI4_bJJHHLR0CX5-G6NxiTgNxaKImCJnSuqun1u56ZOwL6k8JbWNfTYyGsBENcMfrq7NMftBHQgRSTpjQyDOGuWL4FoHLDIMIavpt78W4QvAXg61_Um-LbVXpplZPVRYJBAIwovw7D0sz2zdcTgoVOiKfcCxD1Sl5SRmDMCP187x7SWLD8fURgSk2W9GrfJYnjBPFBCt-4csal7E7kRGJ0VFOrK8";
// async function fetchWebApi(endpoint, method, body) {
//   const res = await fetch(`https://api.spotify.com/${endpoint}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     method,
//     body: JSON.stringify(body),
//   });
//   return await res.json();
// }

// async function getTopTracks() {
//   // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
//   return (
//     await fetchWebApi("v1/me/top/tracks?time_range=short_term&limit=5", "GET")
//   ).items;
// }

// const topTracks = await getTopTracks();
// console.log(
//   topTracks?.map(
//     ({ name, artists }) =>
//       `${name} by ${artists.map((artist) => artist.name).join(", ")}`
//   )
// );

import queryString from "query-string";

import { Buffer } from "buffer";
window.Buffer = Buffer;

const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const NOW_PLAYING_ENDPOINT = `https://api.spotify.com/v1/me/player/currently-playing`;

const client_id = import.meta.env.VITE_APP_SPOTIFY_CLIENT_ID;
const client_secret = import.meta.env.VITE_APP_SPOTIFY_CLIENT_SECRET;
const refresh_token = import.meta.env.VITE_APP_SPOTIFY_REFRESH_TOKEN;

const getAccessToken = async () => {
  const basic = Buffer.from(`${client_id}:${client_secret}`).toString("base64");
  const response = await fetch(TOKEN_ENDPOINT, {
    method: "POST",
    headers: {
      Authorization: `Basic ${basic}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: queryString.stringify({
      grant_type: "refresh_token",
      refresh_token,
    }),
  });
  return response.json();
};

// now playing endpoint
export const getNowPlaying = async (
  client_id,
  client_secret,
  refresh_token
) => {
  const { access_token } = await getAccessToken(
    client_id,
    client_secret,
    refresh_token
  );
  return fetch(NOW_PLAYING_ENDPOINT, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });
};

// return data
export default async function getNowPlayingItem(
  client_id,
  client_secret,
  refresh_token
) {
  const response = await getNowPlaying(client_id, client_secret, refresh_token);
  if (response.status === 204 || response.status > 400) {
    return false;
  }
  const song = await response.json();

  const albumImageUrl = song.item?.album.images[0].url;
  const artist = song.item?.artists.map((_artist) => _artist.name).join(",");
  const isPlaying = song.is_playing;
  const songUrl = song.item.external_urls.spotify;
  const title = song.item.name;

  return {
    albumImageUrl,
    artist,
    isPlaying,
    songUrl,
    title,
  };
}
