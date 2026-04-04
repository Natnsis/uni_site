import { Badge } from "./ui/badge";

const Features = () => {
  return (
    <section className="mt-20">
      <div className="flex justify-center">
        <Badge>Solutions</Badge>
      </div>

      <div className="flex justify-center mt-5">
        <div className=" bg-white px-2">
          <h1 className="text-4xl">Keep everything in one place.</h1>
        </div>
      </div>

      <div className="flex justify-center mt-2">
        <div className=" bg-white px-2 py-2">
          <h1 className="text-gray-500 text-lg">
            Keep everything in one place.
          </h1>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="flex px-20 mt-10 gap-10 justify-center">
          <img src="/hero.png" className="w-1/4 h-[40vh] bg-white" />
          <img src="/hero.png" className="w-2/4 h-[40vh] bg-white" />
        </div>

        <div className="flex px-20 mt-10 gap-10 justify-center">
          <img src="/hero.png" className="w-2/4 h-[40vh] bg-white" />
          <img src="/hero.png" className="w-1/4 h-[40vh] bg-white" />
        </div>
      </div>
    </section>
  );
};

export default Features;
