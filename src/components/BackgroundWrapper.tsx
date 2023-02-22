export const BackgroundWrapper = ({ children }: any) => {
  return (
    <div className="flex flex-row w-max duration-500">
      <div className="absolute w-full h-full">
        <video
          autoPlay
          muted
          loop
          id="myVideo"
          className="object-cover w-full h-full"
        >
          <source src="/tml.mp4" type="video/mp4" />
        </video>
      </div>

      <div className={"w-full min-h-screen z-30 absolute backdrop-blur-md"}>
        <div
          className={
            "w-full min-h-screen h-full -z-10 bg-gradient-to-t from-dark1 to-dark1/30 fixed"
          }
        ></div>
        <div
          className={
            "w-full min-h-screen h-full -z-10 bg-gradient-to-t from-dark1 via-dark1 to-transparent fixed"
          }
        ></div>
        <div
          className={
            "w-full min-h-screen h-full z-30 bg-gradient-to-r from-dark1 via-dark1/70 to-dark1/90 flex flex-col gap-5 "
          }
        >
          <div className="pb-36 pt-32 pl-16 w-full pr-32">{children}</div>
        </div>
      </div>
    </div>
  );
};
