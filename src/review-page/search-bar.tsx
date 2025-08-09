const SearchBar = () => {
  return (
    <>
      <div className=" w-[40%] m-auto text-white font-montserrat font-light">
        <form role="search">
          <input
            type="search"
            name="query"
            placeholder="Search for your favorite Song, Artist, or Album"
            autoComplete="off"
            className="w-full p-2 mb-5 border-b-1 text-center border-white focus:outline-none uppercase placeholder:normal-case placeholder:text-white/60 placeholder:text-center"
          />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
