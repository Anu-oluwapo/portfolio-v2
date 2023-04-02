// Authorization token that must have been created previously. See : https://developer.spotify.com/documentation/web-api/concepts/authorization
const token =
  "BQBcLguBqe3prmzD035kmT7CtWYdBj9Kxaje7Tlfg7DACyVnYufvK1hfgEzzWJ-u93Ig8YulophniDBdvfWwQIQIDEvh7OkABuWZVjqZILb5zkDv9_A2EIPb_yImf-sC3TF5nuSHS7hz1dkTf3HoI4_bJJHHLR0CX5-G6NxiTgNxaKImCJnSuqun1u56ZOwL6k8JbWNfTYyGsBENcMfrq7NMftBHQgRSTpjQyDOGuWL4FoHLDIMIavpt78W4QvAXg61_Um-LbVXpplZPVRYJBAIwovw7D0sz2zdcTgoVOiKfcCxD1Sl5SRmDMCP187x7SWLD8fURgSk2W9GrfJYnjBPFBCt-4csal7E7kRGJ0VFOrK8";
async function fetchWebApi(endpoint, method, body) {
  const res = await fetch(`https://api.spotify.com/${endpoint}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
    method,
    body: JSON.stringify(body),
  });
  return await res.json();
}

async function getTopTracks() {
  // Endpoint reference : https://developer.spotify.com/documentation/web-api/reference/get-users-top-artists-and-tracks
  return (
    await fetchWebApi("v1/me/top/tracks?time_range=short_term&limit=5", "GET")
  ).items;
}

const topTracks = await getTopTracks();
console.log(
  topTracks?.map(
    ({ name, artists }) =>
      `${name} by ${artists.map((artist) => artist.name).join(", ")}`
  )
);
