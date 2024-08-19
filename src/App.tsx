import Banner from "./components/banner";
import Download from "./components/download";
import Footer from "./components/footer";
import Header from "./components/header";
import SpaceComponent from "./components/space";
import WhyUs from "./components/whyUs";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <WhyUs />
      <SpaceComponent />
      <Download />
      <Footer />
    </div>
  );
}

export default App;
