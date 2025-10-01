"use client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "@/app/pages/HomePage/Home";
import ShopPage from "@/app/pages/Shop Page/shop";
// import BlogPage from "./page/BlogPage/Blog";
import ContactPage from "@/app/pages/ContactPage/contact";

export default function Home() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Shop" element={<ShopPage />} />
          {/* <Route path="/blog" element={<BlogPage />} /> */}
          <Route path="/Contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}
