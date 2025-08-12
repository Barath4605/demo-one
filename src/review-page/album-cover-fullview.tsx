import { useEffect } from "react";

interface AlbumCoverFullscreenProps {
  imageUrl: string;
  albumName: string;
  artistName: string;
  onClose: () => void;
}

const AlbumCoverFullscreen: React.FC<AlbumCoverFullscreenProps> = ({
  imageUrl,
  onClose,
  albumName,
  artistName,
}) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center backdrop-blur-sm z-50"
    >
      <img
        onClick={(e) => e.stopPropagation()}
        src={imageUrl}
        alt="Album Cover Fullscreen"
        className="max-w-[90vw] max-h-[90vh] rounded-xl shadow-lg cursor-pointer"
      />

      <div className="text-white">
        <h3 className="text-4xl font-bold">{albumName}</h3>
        <h3 className="text-2xl font-semibold">{artistName}</h3>
      </div>
    </div>
  );
};

export default AlbumCoverFullscreen;
