import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ListeFamille from "./components/ListeFamille";
function App() {
  return (
    <>
      <Header />
      <ListeFamille />
      <Navbar />

      <Footer />
    </>
  );
}

export default App;
