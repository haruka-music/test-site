import React from "react";
import Styles from "@/app/pages/HomePage/Home.module.css";

const Home = () => {
  return (
    <div>
      <section className={Styles.section}>
        <figure className={Styles.image}>
          <p className={Styles.description}>
            Well come to Haruka Website
            <br />
            Please take your time.
          </p>
        </figure>
      </section>
    </div>
  );
};

export default Home;
