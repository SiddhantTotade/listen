import { Link } from "react-router-dom";

const DetailsHeader = ({ artistID, artistData, songData }) => {

  const artist = artistData?.artists[artistID]?.attributes;

  return (
    <div className="relative w-full flex flex-col">
      <div className="w-full bg-gradient-to-l from-transparent to-black sm:h-48 h-28" />
      <div className="absolute inset-0 flex items-center">
        <img className="sm:w-48 w-28 sm:h-48 h-28 rounded-full object-cover border-2 shadow-xl shadow-black" src={artistID ? artist.artwork?.url.replace('{w}', '500').replace('{h}', '500') : songData?.images?.coverart} alt="art" />
        <div className="ml-5">
          <p className="font-bold sm:text-3xl text-xl text-white">{artistID ? artist?.name : songData?.title}</p>
          {!artistID && (
            <Link to={`/artists/${songData?.artists[0].adamid}`}>
              <p className="text-base text-gray-400 mt-2">{songData?.subtitle}</p>
            </Link>
          )}
          <p className="text-base text-gray-400 mt-2">{artistID ? artist?.genreNames[0] : songData?.genres?.primary}</p>
        </div>
      </div>
      <div className="w-full sm:h-44 h-24" />
    </div>
  )
};

export default DetailsHeader;
