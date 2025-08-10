import ImageUrl from "../assets/wasteland.jpg";
import AlbumCover from "./album-cover";
import AlbumDetails from "./album-details";
import FeatureButtons from "./buttons";
import RatingStars from "./rating-stars";

const DetailSection = () => {
  return (
    <>
      <main className="flex w-[40%] font-montserrat p-2 justify-center items-center m-auto">
        <AlbumCover imageUrl={ImageUrl} albumName="First Album" />
        <div className="flex flex-col justify-between h-64 gap-2 p-1">
          <AlbumDetails
            albumName="WASTELAND"
            artistName="Brent Faiyaz"
            albumYear={2005}
          />

          <div className="flex flex-col justify-center items-start">
            <RatingStars />
          </div>
        </div>
      </main>

      <FeatureButtons />
    </>
  );
};

export default DetailSection;
