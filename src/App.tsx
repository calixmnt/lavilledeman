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
        <Presentation/>
        <SitesAVisiter />
        <News />
        <Events />
      </main>

      <Footer />
    </div>
  );
}

export default App;
