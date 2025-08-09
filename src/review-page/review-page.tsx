import CommonHeader from "@/components/ui/header.tsx";
import ImageUrl from "../assets/bg-review.png";
import BackgroundImage from "../components/ui/bg-img";
import DetailSection from "./detail-sec.tsx";

import SearchBar from "./search-bar.tsx";

const ReviewPage = () => {
  return (
    <>
      <BackgroundImage ImageUrl={ImageUrl} />
      <CommonHeader />
      <SearchBar />
      <DetailSection />
    </>
  );
};

export default ReviewPage;
