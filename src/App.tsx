import Footer from "./components/footer.tsx";
import Header from "./components/header.tsx";
import Presentation from "./components/presentation.tsx";
import SitesAVisiter from "./components/sites.tsx";



function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Presentation/>
        <SitesAVisiter />
      </main>

      <Footer />
    </div>
  );
}

export default App;
