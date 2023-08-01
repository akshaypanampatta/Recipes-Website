import Header from "./components/Header/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Recipees from "./pages/Recipees";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Footer from "./components/Footer/Footer";



function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/recipes" element={<Recipees/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
