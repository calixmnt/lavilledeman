import CityMap from "./components/citymap.tsx";
import Events from "./components/events.tsx";
import Footer from "./components/footer.tsx";
import Header from "./components/header.tsx";
import News from "./components/news.tsx";
import Presentation from "./components/presentation.tsx";
import SitesAVisiter from "./components/sites.tsx";
function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Presentation />
        <SitesAVisiter />
        <News />
        <Events />
        {/* <Title icon={ArrowTopRightIcon} className="container title-container title-container--end" dotColor="#fff" title="GetInTouch"/> */}
          <h2 className="title-container title-container--end second-heading">
            <a href="#presentation">La Ville De Man</a>
          </h2>
          <CityMap />
      </main>
      <Footer />
    </div>
  );
}

export default App;
