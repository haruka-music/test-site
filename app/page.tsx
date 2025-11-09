"use client";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import HomePage from "@/app/pages/HomePage/Home";
import ShopPage from "@/app/pages/Shop Page/shop";
import BlogPage from "@/app/pages/BlogPage/Blog";
import ContactPage from "@/app/pages/ContactPage/contact";
import CommitmentPage from "@/app/pages/CommitmentPage/Commit";
import MusicPage from "@/app/pages/MusicPage/Music";

export default function Home() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Shop" element={<ShopPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/Commit" element={<CommitmentPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Music" element={<MusicPage />} />
        </Routes>
      </div>
    </Router>
  );
}
