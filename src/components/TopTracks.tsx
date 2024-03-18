'use client';

import useSWR from "swr";

interface trackType {
  trackName: string,
  trackUrl: string,
  artistName: string,
  artistUrl: string,
  albumName: string,
  albumCover: string,
  albumUrl: string
}

export default function TopTracks() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR('/api/spotify/get-top-tracks', fetcher);

  if (error) 
    return <div>Failed to load</div>
  if (!data) 
    return <div>Loading...</div>
  
  return (
    <div>
      {data.map((track: trackType) => {
         return (<div key={track.trackUrl} className='spotify-song-card m-2'>
          <img
            className='spotify-album-cover'
            src={track.albumCover}
            alt={track.albumName}
          />
        
          <div className='spotify-song-details'>
            <a
              href={track.trackUrl}
              target="_blank"
              rel="noreferrer nofollow"
              aria-label={track.trackName}
              title={track.trackName}
            >
              <span className='spotify-song-link'>{track.trackName}</span> 
            </a>
            <a
              href={track.artistUrl}
              target="_blank"
              rel="noreferrer nofollow"
              aria-label={track.artistName}
              title={track.artistName}
            >
              <span className='spotify-text'>by </span>
              <span className='spotify-link'>{track.artistName}</span>
            </a>
            <a
              href={track.albumUrl}
              target="_blank"
              rel="noreferrer nofollow"
              aria-label={track.albumName}
              title={track.albumName}
            >
              <span className='spotify-text'>on </span>
              <span className='spotify-link'>{track.albumName}</span>
            </a>
          </div>
        </div>)
    })}
    </div>
  )
}