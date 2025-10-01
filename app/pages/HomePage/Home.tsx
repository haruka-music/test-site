import React from "react";
import Sidebar from "@/app/components/layouts/sidebar/sidebar";
import Styles from "@/app/pages/HomePage/Home.module.css";
import Image from "next/image";
import HomeImage from "@/public/noodle/curtain.png";
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <section className={Styles.section}>
        <figure>
          <Image
            src={HomeImage}
            alt="main"
            width={400}
            height={100}
            layout="responsive"
          />
          <p className={Styles.description}>
            Well come to noodle Website
            <br />
            Please take your time.
          </p>
          {/* <button className={Styles.submitButton}>
            <Link to="Home">
              <a>ログイン</a>
            </Link>
          </button> */}
        </figure>
      </section>
    </div>
  );
};

export default Home;
