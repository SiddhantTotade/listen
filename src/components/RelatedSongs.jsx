import SongBar from './SongBar'

const RelatedSongs = ({ data, isPlaying, activeSong, artistID, handlePauseClick, handlePlayClick }) => (
  <div className='flex flex-col'>
    <h1 className='font-bold text-3xl text-white'>Related Songs</h1>
    <div className='mt-6 w-full flex flex-col'>
      {data?.map((song, i) => (
        <SongBar key={`${song.key}-${artistID}`} song={song} i={i} artistId={artistID} isPlaying={isPlaying} handlePauseClick={handlePauseClick} activeSong={activeSong} handlePlayClick={handlePlayClick} />
      ))}
    </div>
  </div>
);

export default RelatedSongs;