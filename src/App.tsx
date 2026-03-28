import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";

const App = () => {
  return (
    <div className="bg-pattern">
      <Header />
      <Hero />
      <Solutions />
      <Features />
    </div>
  );
};

export default App;
