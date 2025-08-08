const SearchBar = () => {
  return (
    <>
      <div className=" w-[40%] m-auto text-white">
        <form role="search">
          <input
            type="search"
            name="query"
            placeholder="Search for your favorite Song, Artist, or Album"
            autoComplete="off"
            className="w-full mt-15 p-2 mb-10 border-b-1 text-center border-white focus:outline-none uppercase placeholder:normal-case placeholder:text-white/60 placeholder:text-center"
          />
        </form>
      </div>
    </>
  );
};

export default SearchBar;
