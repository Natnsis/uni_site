import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="flex h-[95vh]">
      <div className="w-1/5 flex flex-col items-between">
        <div className="h-1/2 flex items-center justify-center">
          <img
            src="/hero.png"
            alt="hero-img"
            className="h-1/2 w-1/2 object-fit bg-white"
          />
        </div>
        <div className="h-1/2 flex items-center justify-center">
          <img
            src="/hero.png"
            alt="hero-img"
            className="h-1/2 w-1/2 object-fit bg-white"
          />
        </div>
      </div>

      <div className="w-3/5 py-30 flex flex-col justify-center">
        <div className="bg-white p-5 rounded-lg">
          <div className="flex items-center justify-center">
            <img
              src="/hero.png"
              alt="hero-img"
              className="object-fit bg-white h-[15vh]"
            />
          </div>
          <div className="flex flex-col items-center justify-center gap-2">
            <h1 className="text-7xl font-bold">Think, plan and track</h1>
            <h2 className="text-6xl text-gray-500">all in one place</h2>
            <p className="text-xl text-gray-500 mt-5">
              Streamline your academic journey with UniSite.
            </p>
            <div className="flex gap-2 mt-4">
              <Button variant="outline" className="border-primary">
                Check Demo
              </Button>
              <Button className="bg-primary text-white">Get Started</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="w-1/5 flex  flex-col items-between">
        <div className="h-1/2 flex items-center justify-center">
          <img
            src="/hero.png"
            alt="hero-img"
            className="h-1/2 w-1/2 object-fit bg-white"
          />
        </div>
        <div className="h-1/2 flex items-center justify-center">
          <img
            src="/hero.png"
            alt="hero-img"
            className="h-1/2 w-1/2 object-fit bg-white"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;

