import React from "react";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Master from "./Component/MainComponent/Master";
import About from "./Component/About";
import Header from "./Component/MainComponent/Header";
import Service from "./Component/Service";
import Home from "./Component/MainComponent/Home";
import Project from "./Component/Project";
import Team from "./Component/Team";
import Testimonial from "./Component/Testimonial";
import Contact from "./Component/Contact";
import Notfound from "./Component/Notfound";
import ServicesCard1 from "./Component/ServicesCard1";
import AboutCard from "./Component/AboutCard";
import ServicesCard2 from "./Component/ServicesCard2";
import ServicesCard3 from "./Component/ServicesCard3";
import ServicesCard4 from "./Component/ServicesCard4";
import ServicesCard5 from "./Component/ServicesCard5";
import ServicesCard6 from "./Component/ServicesCard6";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Master Rcf={Home} />}></Route>
          <Route path="/about" element={<Master Rcf={About} />}></Route>
          {/* <Route path="/project" element={<Master Rcf={Project} />}></Route> */}
          <Route path="/team" element={<Master Rcf={Team} />}></Route>
          <Route path="/testimonial" element={<Master Rcf={Testimonial}/>}></Route>
          <Route path="/contact" element={<Master Rcf={Contact} />}></Route>
          <Route path="/notfound" element={<Master Rcf={Notfound} />}></Route>
          <Route path="/service" element={<Master Rcf={Service} />}></Route>
          <Route path="/aboutcard" element={<Master Rcf={AboutCard} />}></Route>
          <Route path="/servicescard1" element={<Master Rcf={ServicesCard1} />}></Route>
          <Route path="/servicescard2" element={<Master Rcf={ServicesCard2} />}></Route>
          <Route path="/servicescard3" element={<Master Rcf={ServicesCard3} />}></Route>
          <Route path="/servicescard4" element={<Master Rcf={ServicesCard4} />}></Route>
          <Route path="/servicescard5" element={<Master Rcf={ServicesCard5} />}></Route>
          <Route path="/servicescard6" element={<Master Rcf={ServicesCard6} />}></Route>





         

         
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
