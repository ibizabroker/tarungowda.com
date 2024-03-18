import { getTopTracks } from '@/utils/spotify';
import { NextResponse } from "next/server";

export async function GET() {
  const response = await getTopTracks();
  const topTracks = await response.json();

  const topTracksDetails = topTracks.items.map((track: any) => ({
    trackName: track.name,
    trackUrl: track.external_urls.spotify,
    artistName: track.artists[0].name,
    artistUrl: track.artists[0].external_urls.spotify,
    albumName: track.album.name,
    albumCover: track.album.images[0].url,
    albumUrl: track.album.external_urls.spotify
  }));

  return new NextResponse(
    JSON.stringify(topTracksDetails),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=1296000, stale-while-revalidate=648000'
      }
    }
  );
}