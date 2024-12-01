
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import FooterSm from "./mobile-components/FooterSm";
import MainSm from "./mobile-components/MainSm";

function App() {
  return (
    <>
      <div className="App d-none d-sm-block ">
        <header>
          <Header />
        </header>
        <main>
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>

      <div className="App-mobile d-block d-sm-none ">
       <header>
       
       </header>
       <main>
       <MainSm />
       </main>
       <footer className="">
        <FooterSm />
       </footer>
      </div>
    </>
  );
}

export default App;
