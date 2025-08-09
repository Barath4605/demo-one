import ImageSrc from "../../assets/bg-homepage.png";
import BackgroundImage from "./bg-img";
import NavLinks from "./navigation-links";

const HomePage = () => {
  return (
    <>
      <BackgroundImage ImageUrl={ImageSrc} />
      <div className="absolute left-[40%] top-1/2 transform -translate-1/2">
        <div className="flex justify-center">
          <header className="flex justify-center pl-3 border-l border-white/60 ">
            <h2 className="text-6xl font-semibold text-white font-bodoni leading-tight ">
              At My Melo
              <br />
              <span className="block text-white/70 text-sm font-light italic mt-0">
                My Personalized Music Diary
              </span>
            </h2>
          </header>
        </div>

        <NavLinks />
      </div>
    </>
  );
};

export default HomePage;
