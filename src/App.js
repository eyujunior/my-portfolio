import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Footer from "./components/Footer";
function App() {
  // const handleThemeChange = () => {}
  return (
    <>
      <Router>
        <div className="py-2 px-3 xl:px-6">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/*" element={<NotFound />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
