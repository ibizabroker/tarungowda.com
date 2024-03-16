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
    <div className='dark:bg-dark-2 relative flex w-[290px] items-center rounded-md border border-solid dark:border-divider-1 p-3 transition-shadow hover:shadow-[0_0_4px_2px_rgba(120,120,120,0.1)]'>
      <div className='w-[64px]'>
        <img
          className='shadow-[25px]'
          src={data.albumCover}
          alt={data.albumName}
        />
      </div>
    
      <div className='flex flex-col ml-4'>
        <a
          href={data.trackUrl}
          target="_blank"
          rel="noreferrer nofollow"
          className='font-medium'
          aria-label={data.trackName}
          title={data.trackName}
        >
          <span className='hover:underline'>{data.trackName}</span> 
        </a>
        <a
          href={data.artistUrl}
          target="_blank"
          rel="noreferrer nofollow"
          className='text-xs'
          aria-label={data.artistName}
          title={data.artistName}
        >
          <span className='hover:no-underline'>by </span>
          <span className='hover:underline'>{data.artistName}</span>
        </a>
        <a
          href={data.albumUrl}
          target="_blank"
          rel="noreferrer nofollow"
          className='text-xs'
          aria-label={data.albumName}
          title={data.albumName}
        >
          <span className='hover:no-underline'>on </span>
          <span className='hover:underline'>{data.albumName}</span>
        </a>
      </div>

      <div className='absolute top-1.5 right-1.5'>
        <SpotifyIcon className='footer-icon text-[#1ED760]' />
      </div>
    </div>
  )
}