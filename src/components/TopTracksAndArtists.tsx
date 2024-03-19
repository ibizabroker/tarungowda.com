'use client';

import useSWR from "swr";

interface trackType {
  trackName: string
  trackUrl: string
  artistName: string
  artistUrl: string
  albumName: string
  albumCover: string
  albumUrl: string
}

interface artistType {
  artistName: string
  artistUrl: string
  artistCover: string
  artistGenres: string[]
}

export default function TopTracks() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  
  const respTracks = useSWR('/api/spotify/get-top-tracks', fetcher);
  const respArtists = useSWR('/api/spotify/get-top-artists', fetcher);
  const respTracksData = respTracks.data;
  const respArtistsData = respArtists.data;

  if (respTracks.error || respArtists.error)
    return <div>Failed to load</div>
  if (!respTracksData || !respArtistsData)
    return <div>Loading...</div>
  
  return (
    <div className='top-five-main'>
      <div className='display-text'>
        Tracks
        {respTracksData.map((track: trackType) => {
          return (<div key={track.trackUrl} className='spotify-song-card'>
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
                className="no-underline"
                aria-label={track.trackName}
                title={track.trackName}
              >
                <span className='spotify-song-link'>{track.trackName}</span> 
              </a>
              <a
                href={track.artistUrl}
                target="_blank"
                rel="noreferrer nofollow"
                className="no-underline"
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
                className="no-underline"
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
      <div className='display-text'>
        Artists
        {respArtistsData.map((artist: artistType) => {
          return (<div key={artist.artistUrl} className='spotify-song-card'>
            <img
              className='spotify-album-cover'
              src={artist.artistCover}
              alt={artist.artistName}
            />
          
            <div className='spotify-song-details'>
              <a
                href={artist.artistUrl}
                target="_blank"
                rel="noreferrer nofollow"
                className="no-underline"
                aria-label={artist.artistName}
                title={artist.artistName}
              >
                <span className='spotify-song-link'>{artist.artistName}</span> 
              </a>
              <p className='spotify-text'>
                {artist.artistGenres.map(genre => {
                  return <span key={genre}> · {genre}</span>
                })}
              </p>
            </div>
          </div>)
        })}
      </div>
    </div>
  )
}