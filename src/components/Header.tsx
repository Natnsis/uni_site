import { Button } from "./ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between bg-white py-3 px-6 border-b">
      <h1>Logo</h1>
      <nav className="flex gap-4">
        <a>Features</a>
        <a>Solutions</a>
        <a>Resources</a>
        <a>Pricing</a>
      </nav>
      <div className="flex gap-4">
        <Button variant="ghost">Sign in</Button>
        <Button
          variant="outline"
          className="border-primary px-3 rounded-sm py-0.5"
        >
          Get App
        </Button>
      </div>
    </header>
  );
};

export default Header;
