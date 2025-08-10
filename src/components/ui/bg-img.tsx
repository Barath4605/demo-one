type Props = {
  ImageUrl: string;
};

const BackgroundImage = ({ ImageUrl }: Props) => {
  return (
    <div
      className="absolute top-0 left-0 w-[100vw] h-[100vh] -z-10 bg-cover bg-center bg-fixed"
      style={{
        backgroundImage: `url(${ImageUrl})`,
        backgroundRepeat: "no-repeat",
      }}
    />
  );
};

export default BackgroundImage;
