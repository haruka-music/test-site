import React from "react";
import Sidebar from "@/app/components/layouts/sidebar/sidebar";
import Styles from "@/app/pages/MusicPage/Music.module.css";

const Music = () => {
  return (
    <>
      <Sidebar />
      <section className={Styles.section}>
        <h1 className={Styles.header}>ひとときの時間</h1>
      </section>
    </>
  );
};

export default Music;
