import { HugeiconsIcon } from "@hugeicons/react";
import { PhoneArrowDownIcon } from "@hugeicons/core-free-icons";
import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white py-3 px-6 border-b">
      <h1>Logo</h1>

      <nav className="flex gap-5">
        <a>Features</a>
        <a>Solutions</a>
        <a>Resources</a>
        <a>Pricing</a>
      </nav>

      <div className="flex gap-4">
        <Button
          variant="outline"
          className="px-3 rounded-sm py-0.5"
        >
          <HugeiconsIcon icon={PhoneArrowDownIcon} />
          Get App
        </Button>

        <Button
          variant="ghost">
          Sign in
        </Button>
      </div>
    </header>
  );
};

export default Header;
