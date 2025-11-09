import React from "react";
import Sidebar from "@/app/components/layouts/sidebar/sidebar";
import Styles from "@/app/pages/BlogPage/Blog.module.css";

const Blog = () => {
  return (
    <>
      <Sidebar />
      <section className={Styles.section}>
        <h1 className={Styles.header}>ブログ</h1>
      </section>
    </>
  );
};

export default Blog;
