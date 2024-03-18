import { getTopArtists } from '@/utils/spotify';
import { NextResponse } from "next/server";

export async function GET() {
  const response = await getTopArtists();
  const topArtists = await response.json();

  const topArtistsDetails = topArtists.items.map((artist: any) => ({
    artistName: artist.name,
    artistUrl: artist.external_urls.spotify,
    artistCover: artist.images[0].url
  }));

  return new NextResponse(
    JSON.stringify(topArtistsDetails),
    {
      status: 200,
      headers: {
        'content-type': 'application/json',
        'cache-control': 'public, s-maxage=1296000, stale-while-revalidate=648000'
      }
    }
  );
}