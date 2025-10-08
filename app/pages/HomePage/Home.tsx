import React from "react";
import Sidebar from "@/app/components/layouts/sidebar/sidebar";
import Styles from "@/app/pages/HomePage/Home.module.css";
import Image from "next/image";
import HomeImage from "@/public/BackImage/curtain.png";
import noodle from "@/public/BackImage/noodle.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Sidebar />
      <section className={Styles.section}>
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
        <figure>
          <Image
            src={noodle}
            alt="main"
            width={400}
            height={100}
            className={Styles.image}
          />
          <p className={Styles.description}>
            地元にどんなラーメン屋があるのか知っていますか？
            <br />
            スープにこだわりはありますか？
          </p>
          <button className={Styles.submitButton}>
            <Link to="Home">
              <p>↓↓↓↓↓↓</p>
              <a>ログイン</a>
            </Link>
          </button>
        </figure>
      </section>
    </div>
  );
};

export default Home;
