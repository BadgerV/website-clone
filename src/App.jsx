import "./App.css";
import Header from "./components/header/Header";
import MyCarousel from "./components/carousel/Carousel";
import Services from "./components/services/Services";
import Disaster from "./components/disaster/Disaster";
import References from "./components/references/References";
import Youtube from "./components/youtube/Youtube";
import OtherServices from "./components/otherServices/otherServices";
import Footer from "./components/footer/Footer";

const App = () => {
  return (
    <div className="app">
      <Header />
      <MyCarousel />
      <Services />
      <Disaster />
      <References />
      <Youtube />
      <OtherServices />
      <Footer />
    </div>
  );
};

export default App;
