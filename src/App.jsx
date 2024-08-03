import Topbar from "./components/topbar/TopBar";
import Home from "./components/home/Home";
import "./App.css";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <div className='main__div'>
      <Topbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
