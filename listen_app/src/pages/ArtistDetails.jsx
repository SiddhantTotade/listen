import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import { useGetArtistDetailsQuery } from "../redux/services/shazamCore";

const ArtistDetails = () => {

  const { id: artistID } = useParams()
  const { activeSong, isPlaying } = useSelector((state) => state.player)
  const { data: artistData, isFetching: isFetchingArtistDetails, error } = useGetArtistDetailsQuery(artistID)

  if (isFetchingArtistDetails) return <Loader title="Loading artist details" />

  if (error) return <Error />

  return (
    <div className="flex flex-col">
      <DetailsHeader artistID={artistID} artistData={artistData} />

      <RelatedSongs data={Object.values(artistData?.songs)} artistID={artistID} isPlaying={isPlaying} activeSong={activeSong} />
    </div>
  )
}

export default ArtistDetails;
