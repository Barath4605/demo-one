import ImageUrl from "../assets/bg-review.jpg";
import BackgroundImage from "../components/ui/bg-img";

import SearchBar from "./search-bar.tsx";

const ReviewPage = () => {
  return (
    <>
      <BackgroundImage ImageUrl={ImageUrl} />
      <SearchBar />
    </>
  );
};

export default ReviewPage;
