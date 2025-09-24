"use client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/Home";
// import SchedulePage from "./page/SchedulePage/Schedule";
// import BlogPage from "./page/BlogPage/Blog";
// import ContactPage from "./page/ContactPage/Contact";

export default function Home() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          {/* <Route path="/Schedule" element={<SchedulePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} /> */}
        </Routes>
      </div>
    </Router>
  );
}
