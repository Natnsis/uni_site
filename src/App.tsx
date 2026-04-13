import Features from "./components/Features";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Solutions from "./components/Solutions";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="bg-pattern">
      <Header />
      <Hero />
      <Solutions />
      <Features />
      <Footer />
    </div>
  );
};

export default App;
