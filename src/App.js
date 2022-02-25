import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Convertor from "./pages/Convertor/Convertor";
import About from "./pages/About/About";

const App = () => (
  <>
    <Toaster />
    <Navigation />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Convertor />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
