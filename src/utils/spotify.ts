const CLIENT_ID = process.env.SPOTIFY_CLIENT_ID;
const CLIENT_SECRET = process.env.SPOTIFY_CLIENT_SECRET;
const REFRESH_TOKEN = process.env.SPOTIFY_REFRESH_TOKEN;

const BASIC_TOKEN = Buffer.from(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64');
const TOKEN_ENDPOINT = `https://accounts.spotify.com/api/token`;

const RECENTLY_PLAYED_ENDPOINT = `https://api.spotify.com/v1/me/player/recently-played?limit=1`;
const TOP_TRACKS_ENDPOINT = `https://api.spotify.com/v1/me/top/tracks?time_range=short_term&limit=5`; // short term - 4 weeks, medium_term - 6 months, long_term - years of data including new
const TOP_ARTISTS_ENDPOINT = `https://api.spotify.com/v1/me/top/artists?time_range=short_term&limit=5`;

const getAccessToken = async () => {
  const res = await fetch(TOKEN_ENDPOINT, {
    method: 'POST',
    headers: {
      'Authorization': `Basic ${BASIC_TOKEN}`,
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: new URLSearchParams({
      'grant_type': 'refresh_token',
      'refresh_token': REFRESH_TOKEN ? REFRESH_TOKEN : '',
    }),
    cache: "no-cache"
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(`Failed to fetch access token: ${data.error}`);
  }

  return data.access_token;
};

export const getRecentlyPlayed = async () => {
  const access_token = await getAccessToken();

  const res = await fetch(RECENTLY_PLAYED_ENDPOINT, {
    headers: {
      'Authorization': `Bearer ${access_token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch last played data: ${res.statusText}`);
  }

  return res;
};

export const getTopTracks = async () => {
  const access_token = await getAccessToken();

  const res = await fetch(TOP_TRACKS_ENDPOINT, {
    headers: {
      'Authorization': `Bearer ${access_token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch last played data: ${res.statusText}`);
  }

  return res;
};

export const getTopArtists = async () => {
  const access_token = await getAccessToken();

  const res = await fetch(TOP_ARTISTS_ENDPOINT, {
    headers: {
      'Authorization': `Bearer ${access_token}`,
    },
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch last played data: ${res.statusText}`);
  }

  return res;
};
