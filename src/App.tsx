import Footer from "./components/footer.tsx";
import Header from "./components/header.tsx";
import Presentation from "./components/presentation.tsx";



function App() {
  return (
    <div className="app">
      <Header />
      <main className="main">
        <Presentation/>
      </main>

      <Footer />
    </div>
  );
}

export default App;
