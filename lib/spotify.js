import SpotifyWebApi from "spotify-web-api-node";

const scopes = [
  "user-read-email",
  "playlist-read-private",
  "playlist-read-collaborative",
  "user-library-read",
  "user-top-read",
  "user-modify-playback-state",
  "user-read-recently-played",
  "user-follow-read",
  "streaming",
  "user-read-email",
  "user-read-playback-state",
  "user-read-currently-playing",
  "user-read-private",
//   "user-library-modify",
].join(",");

const params = {
    scope: scopes
}

const queryParamString = new URLSearchParams(params).toString();

const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString}`;

const spotifyApi = new SpotifyWebApi({
    clientId: process.env.NEXT_PUBLIC_CLIENT_ID,
    clientSecret: process.env.NEXT_PUBLIC_CLIENT_SECRET,
});

export default spotifyApi;

export { LOGIN_URL };