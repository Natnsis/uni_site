import { Badge } from "./ui/badge";

const Testimonials = () => {
  return (
    <section className="mt-30">
      <div className="flex justify-center">
        <Badge>Testimonials</Badge>
      </div>

      <div className="flex justify-center w-full">
        <h1 className="text-5xl w-[45vw] text-center bg-white mt-5">
          People just like you are already using uni site
        </h1>
      </div>

      <div className="h-screen px-20 flex gap-5 mt-5">
        <div className="h-[90vh] w-full py-5">
          <div className="shadow-lg rounded-lg h-[65%] bg-white w-[60%] p-5 flex flex-col justify-between gap-5">
            <div>
              <p className="text-gray-500 text-sm">
                The transition from traditional coursework to this digital
                ecosystem has been seamless. Having my entire curriculum,
                cafeteria schedule, and real-time feedback in one place makes
                managing my academic life feel effortless. It’s exactly what a
                modern campus experience should look like.
              </p>
            </div>
            <div className="flex gap-5">
              <div className="flex items-center">
                <img src="/hero.png" className="h-10 w-10" />
              </div>
              <div>
                <h1 className="font-bold">heheh</h1>
                <p className="text-gray-400 text-sm">
                  this jis onsd hsojf sfhalfjksjf kjslf
                </p>
              </div>
            </div>
          </div>
          <div className="shadow-lg rounded-lg h-[25%] bg-white w-[60%]"></div>
        </div>

        <div className="h-[90vh] w-full flex flex-col items-center justify-between py-5">
          <div className="shadow-lg rounded-lg h-[25%] bg-white w-[60%]"></div>
          <div className="shadow-lg rounded-lg h-[65%] bg-white w-[60%]"></div>
        </div>

        <div className="h-[90vh] w-full flex flex-col items-center justify-between py-5">
          <div className="shadow-lg rounded-lg h-[25%] bg-white w-[60%]"></div>
          <div className="shadow-lg rounded-lg h-[65%] bg-white w-[60%]"></div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
