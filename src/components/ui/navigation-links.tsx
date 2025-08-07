const NavLinks = () => {
  return (
    <nav className="text-white m-auto flex flex-col justify-start mt-10 font-lato">
      <ul className="">
        <li className="mt-1.5 text-xl font-medium">
          <a
            className="link-underline-animate hover:-translate-y-1 transition-all ease-in-out duration-500 py-2"
            data-tip="Share opinions and takes of your latest listen!"
            href="src/review/review.html"
          >
            Log a Review
          </a>
        </li>
        <li className="mt-1.5 text-xl font-medium">
          <a
            className="link-underline-animate hover:-translate-y-1 transition-all ease-in-out duration-500 py-2"
            data-tip="Manage your Playlists, Favorite Artists and More!"
            href="src/user-collection/user-collection.html"
          >
            Your Collection
          </a>
        </li>
        <li className="mt-1.5 text-xl font-medium">
          <a
            className="link-underline-animate hover:-translate-y-1 transition-all ease-in-out duration-500 py-2"
            data-tip="These Albums are waiting in queue for you to listen.."
            href=""
          >
            On Your Deck
          </a>
        </li>
        <li className="mt-1.5 text-xl font-medium">
          <a
            className="link-underline-animate hover:-translate-y-1 transition-all ease-in-out duration-500 py-2"
            data-tip="Listen to all new music dropped this Friday."
            href=""
          >
            New Music Friday
          </a>
        </li>
        <li className="mt-1.5 text-xl font-medium">
          <a
            className="link-underline-animate hover:-translate-y-1 transition-all ease-in-out duration-500 py-2"
            data-tip="See what's up in the Industry."
            href="src/news-updates/news-updates.html"
          >
            News & Updates
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
