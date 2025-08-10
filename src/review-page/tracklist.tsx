import { faSpotify } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type Track = {
  id: number;
  title: string;
  link: string;
};

const tracks: Track[] = [
  { id: 1, title: "ROLE MODEL", link: "/" },
  { id: 2, title: "ANOTHER TRACK", link: "/" },
];

const Tracklist: React.FC = () => {
  return (
    <section className="w-2/5 m-auto">
      <h2 className="text-white text-xl font-montserrat p-1 border-b border-white">
        Tracklist for Wasteland
      </h2>

      <ul className="grid grid-cols-3 p-3 mt-3 border-12 border-transparent min-h-[150px] max-h-[230px] backdrop-blur-3xl rounded-xl font-mono gap-2 overflow-scroll">
        {tracks.map((track) => (
          <li
            key={track.id}
            className="leading-tight w-[180px] p-1 m-1 text-white/80 border-b border-white flex justify-between items-center"
          >
            <div>
              <h4 className="px-1">Track #{track.id}</h4>
              <h2 className="text-lg font-semibold px-1">{track.title}</h2>
            </div>
            <a href={track.link} target="_blank" rel="noreferrer">
              <FontAwesomeIcon
                icon={faSpotify}
                className="scale-150 p-1 hover:text-green-500 transition-all ease-in-out duration-500"
              />
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Tracklist;
