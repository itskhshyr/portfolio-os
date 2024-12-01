import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";

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

      <div className="d-block d-sm-none bg-danger">
        dfdfg
      </div>
    </>
  );
}

export default App;
