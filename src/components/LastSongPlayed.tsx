'use client';

import useSWR from 'swr';

export default function LastSongPlayed() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json())
  const { data, error } = useSWR('/api/spotify/get-recently-played', fetcher)
  if (error) 
    return <div>Failed to load</div>
  if (!data) 
    return <div>Loading...</div>

  return(
    <div>
      <p>{data.trackName}</p>
      <p>{data.trackUrl}</p>
      <p>{data.artistName}</p>
      <p>{data.artistUrl}</p>
      <p>{data.albumName}</p>
      <p>{data.albumCover}</p>
      <p>{data.albumUrl}</p>
    </div>
  )
}