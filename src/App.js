import Header from "./components/Header"
import Event from "./components/Event";
import Service from "./components/Service";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Event />
      <Service />
      <About />
      <Footer />
    </div>
  )
}

export default App;
