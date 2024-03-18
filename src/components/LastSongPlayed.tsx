'use client';

import SpotifyIcon from '@/icons/spotify.svg';
import useSWR from 'swr';

export default function LastSongPlayed() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR('/api/spotify/get-recently-played', fetcher);
  
  if (error) 
    return <div>Failed to load</div>
  if (!data) 
    return <div>Loading...</div>

  return(
    <div className='spotify-song-card'>
      <img
        className='spotify-album-cover'
        src={data.albumCover}
        alt={data.albumName}
      />
    
      <div className='spotify-song-details'>
        <a
          href={data.trackUrl}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label={data.trackName}
          title={data.trackName}
        >
          <span className='spotify-song-link'>{data.trackName}</span> 
        </a>
        <a
          href={data.artistUrl}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label={data.artistName}
          title={data.artistName}
        >
          <span className='spotify-text'>by </span>
          <span className='spotify-link'>{data.artistName}</span>
        </a>
        <a
          href={data.albumUrl}
          target="_blank"
          rel="noreferrer nofollow"
          aria-label={data.albumName}
          title={data.albumName}
        >
          <span className='spotify-text'>on </span>
          <span className='spotify-link'>{data.albumName}</span>
        </a>
      </div>

      <div className='spotify-song-icon'>
        <SpotifyIcon className='footer-icon text-[#1ED760]' />
      </div>
    </div>
  )
}