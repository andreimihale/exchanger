import "./App.scss";
import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navigation from "./components/Navigation/Navigation";
import Footer from "./components/Footer/Footer";
import Convertor from "./pages/Convertor/Convertor";

const App = () => (
  <>
    <Toaster />
    <Navigation />
    <main className="main-content">
      <Routes>
        <Route path="/" element={<Convertor />} />
      </Routes>
    </main>
    <Footer />
  </>
);

export default App;
