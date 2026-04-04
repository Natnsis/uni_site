import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div className="bg-pattern">
      <Header />
      <Hero />
      <Solutions />
      <Features />
      <Testimonials />
    </div>
  );
};

export default App;
