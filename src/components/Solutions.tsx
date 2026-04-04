import { Badge } from "./ui/badge";
import { HugeiconsIcon } from "@hugeicons/react";
import { PhoneArrowDownIcon } from "@hugeicons/core-free-icons";
import { Card, CardContent, CardDescription } from "./ui/card";

const Solutions = () => {
  return (
    <section>
      <div className="flex justify-center">
        <Badge>Solutions</Badge>
      </div>

      <div className="flex justify-center w-full">
        <h1 className="text-5xl w-[30vw] text-center bg-white mt-5">
          Solve your team's biggest challenges
        </h1>
      </div>

      <div className="flex justify-between px-20 mt-10 gap-5">
        <Card>
          <CardContent>
            <HugeiconsIcon
              icon={PhoneArrowDownIcon}
              className="text-primary"
              size={40}
            />
          </CardContent>
          <CardDescription className="px-5">
            Check out our this and that so that you can do this and that. this
            is all very wierd for donald trump.
          </CardDescription>
        </Card>

        <Card>
          <CardContent>
            <HugeiconsIcon
              icon={PhoneArrowDownIcon}
              className="text-primary"
              size={40}
            />
          </CardContent>
          <CardDescription className="px-5">
            Check out our this and that so that you can do this and that. this
            is all very wierd for donald trump.
          </CardDescription>
        </Card>

        <Card>
          <CardContent>
            <HugeiconsIcon
              icon={PhoneArrowDownIcon}
              className="text-primary"
              size={40}
            />
          </CardContent>
          <CardDescription className="px-5">
            Check out our this and that so that you can do this and that. this
            is all very wierd for donald trump.
          </CardDescription>
        </Card>
      </div>

      <div className="flex justify-center h-[80vh] mt-10">
        <img src="/hero.png" className="w-[80vw]" alt="show-img" />
      </div>
    </section>
  );
};

export default Solutions;

