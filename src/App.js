import Navbar from "./Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import Pricing from "./pages/Pricing";
import { Route, Routes} from "react-router-dom";

function App() {
  // let component 
  // switch (window.location.pathname) {
  //   case "/" :
  //     component = <Home />
  //     break
  //   case "pricing" :
  //     component = <Pricing />
  //     break
  //   case "/about":
  //     component = <About />
  //     break
  // }
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/about" element={<About />} />
        </Routes>
        {/* {component} */}
      </div>
    </div>
  );
}

export default App;
