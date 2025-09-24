import React from "react";
import Styles from "@/app/pages/HomePage/Home.module.css";
import Image from "next/image";
import HomeImage from "@/public/BackImage/coming soon.jpg";
// import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <section className={Styles.section}>
        <figure className={Styles.image}>
          <Image src={HomeImage} width={800} height={400} alt="main" />
          <p className={Styles.description}>
            Well come to Haruka Website
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
