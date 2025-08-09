import FeatureButtons from "./buttons";
import RatingStars from "./rating-stars";

const DetailSection = () => {
  return (
    <>
      <div className="flex w-[40%] font-montserrat h-fit p-2 justify-center m-auto">
        <div className="flex items-start gap-4 mb-8 justify-center">
          <div>
            <img
              id="album-img"
              className=" h-65 w-65"
              src="https://media.pitchfork.com/photos/62c715e86284eb9164c12cd5/master/pass/Brent-Faiyaz-Wasteland.jpg"
              alt=""
            />
          </div>

          <div className="flex flex-col justify-between h-64 gap-2 p-1">
            <div>
              <h2
                id="album-name"
                className="text-4xl max-w-[300px] max-h-[140px] overflow-x-hidden font-bold text-white leading-tight"
              >
                Wasteland
              </h2>
              <p id="artist-name" className="text-white font-medium">
                Brent Faiyaz
              </p>

              <span className="flex gap-2 text-white/70 text-sm font-light mt-3 font-inter">
                <span className="bg-white/50 py-0.5 px-2 rounded-lg">
                  <p id="album-year">2022</p>
                </span>
              </span>
            </div>

            <div className="flex flex-col justify-center items-start">
              <RatingStars />
            </div>
          </div>
        </div>
      </div>

      <FeatureButtons />
    </>
  );
};

export default DetailSection;
