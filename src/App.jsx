// import Navbar from "./components/Navbar";
// import Hero from "./components/Hero";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import ThankYou from "./pages/ThankYou"; 

// function App() {
//   return (
//     <div className="bg-black text-white">
//       <Navbar />
//       <main>
//         <Hero />
//         <About />
//         <Projects />
//         <Contact />
//       </main>
//       <Footer />
//     </div>
//   );
// }

// export default App;




import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ThankYou from "./components/ThankYou"; // ✅ import this
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="bg-black text-white">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Projects />
                <Contact />
              </>
            }
          />
          <Route path="/thank-you" element={<ThankYou />} /> {/* ✅ Add route */}
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
