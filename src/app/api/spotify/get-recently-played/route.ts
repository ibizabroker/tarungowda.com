import { getRecentlyPlayed } from '@/utils/spotify';
import { NextResponse } from "next/server";

export async function GET() {
  const response = await getRecentlyPlayed();
  const recentlyPlayedSongs = await response.json();

  const lastSongPlayed = {
    trackName: recentlyPlayedSongs.items[0].track.name,
    trackUrl: recentlyPlayedSongs.items[0].track.external_urls.spotify,
    artistName: recentlyPlayedSongs.items[0].track.artists[0].name,
    artistUrl: recentlyPlayedSongs.items[0].track.artists[0].external_urls.spotify,
    albumName: recentlyPlayedSongs.items[0].track.album.name,
    albumCover: recentlyPlayedSongs.items[0].track.album.images[0].url,
    albumUrl: recentlyPlayedSongs.items[0].track.album.external_urls.spotify
  };

  return new NextResponse(
    JSON.stringify(lastSongPlayed),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=240, stale-while-revalidate=120'
      }
    }
  );
}