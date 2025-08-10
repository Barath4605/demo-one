interface AlbumCoverProps {
  imageUrl: string;
  albumName: string;
}

const AlbumCover: React.FC<AlbumCoverProps> = ({ imageUrl, albumName }) => {
  return (
    <div>
      <img
        className="w-70 p-3 rounded-2xl"
        src={imageUrl}
        alt={`${albumName} Cover Art`}
      />
    </div>
  );
};

export default AlbumCover;
