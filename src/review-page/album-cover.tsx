import { useState } from "react";
import AlbumCoverFullscreen from "./album-cover-fullview";

interface AlbumCoverProps {
  imageUrl: string;
  albumName: string;
  artistName: string;
}

const AlbumCover: React.FC<AlbumCoverProps> = ({
  imageUrl,
  albumName,
  artistName,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  return (
    <div>
      <img
        onClick={() => setIsFullscreen(!isFullscreen)}
        className="w-70 p-3 rounded-2xl"
        src={imageUrl}
        alt={`${albumName} Cover Art`}
      />
      {isFullscreen && (
        <AlbumCoverFullscreen
          imageUrl={imageUrl}
          albumName={albumName}
          artistName={artistName}
          onClose={() => setIsFullscreen(!isFullscreen)}
        />
      )}
    </div>
  );
};

export default AlbumCover;
