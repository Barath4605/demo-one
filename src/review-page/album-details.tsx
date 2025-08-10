interface AlbumDetailsProps {
  albumName: string;
  artistName: string;
  albumYear: number;
}

const AlbumDetails: React.FC<AlbumDetailsProps> = ({
  albumName,
  artistName,
  albumYear,
}) => {
  return (
    <section>
      <h2
        id="album-name"
        className="text-4xl max-w-[300px] max-h-[140px] overflow-x-hidden font-bold text-white leading-tight"
      >
        {albumName}
      </h2>
      <p id="artist-name" className="text-white font-medium">
        {artistName}
      </p>

      <span className="flex gap-2 text-white/70 text-sm font-medium mt-2 font-inter">
        <span className="bg-white/50 py-0.5 px-2 rounded-lg">
          <p id="album-year">{albumYear}</p>
        </span>
      </span>
    </section>
  );
};

export default AlbumDetails;
