import { Link } from "react-router-dom";

const links = [
  {
    text: "Log a Review",
    tip: "Share opinions and takes of your latest listen!",
    path: "/review",
  },
  {
    text: "Your Collection",
    tip: "Manage your Playlists, Favorite Artists and More!",
    path: "/collection",
  },
  {
    text: "On Your Deck",
    tip: "These Albums are waiting in queue for you to listen..",
    path: "/deck",
  },
  {
    text: "New Music Friday",
    tip: "Listen to all new music dropped this Friday.",
    path: "/new-music",
  },
  {
    text: "News & Updates",
    tip: "See what's up in the Industry.",
    path: "/news",
  },
];

const NavLinks = () => {
  return (
    <nav className="text-white/80 m-auto flex flex-col justify-start mt-10 font-lato">
      <ul>
        {links.map(({ text, tip, path }, i) => (
          <li key={i} className="mt-1.5 text-xl font-medium">
            <Link
              className="link-underline-animate font-medium font-lato hover:-translate-y-1 hover:text-white transition-all ease-in-out duration-500 py-2"
              data-tip={tip}
              to={path}
            >
              {text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
