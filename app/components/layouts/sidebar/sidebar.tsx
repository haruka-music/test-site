import React from "react";
import Styles from "@/app/components/layouts/sidebar/sidebar.module.css";
import { Link } from "react-router-dom";

const sidebar = () => {
  return (
    <>
      <nav className={Styles.nav}>
        <h1 className={Styles.h1}>ラーメン道</h1>
        <ul className={Styles.ul}>
          <div style={{ width: "50px" }}>
            <div style={{ margin: "10px", fontSize: "x-large" }}>
              {/* <FontAwesomeIcon icon={faHouse} className="" /> */}
            </div>
          </div>
          <li className={Styles.ListName}>
            <Link className={Styles.Link} to="/">
              ホーム
            </Link>
          </li>

          <div style={{ width: "50px" }}>
            <div style={{ margin: "10px", fontSize: "x-large" }}>
              {/* <FontAwesomeIcon icon={faPerson} className="" /> */}
            </div>
          </div>
          <li className={Styles.ListName}>
            <Link className={Styles.Link} to="/Shop">
              お店情報
            </Link>
          </li>

          <div style={{ width: "50px" }}>
            <div style={{ margin: "10px", fontSize: "x-large" }}>
              {/* <FontAwesomeIcon icon={faGamepad} className="" /> */}
            </div>
          </div>
          <li className={Styles.ListName}>
            <Link className={Styles.Link} to="/Commit">
              こだわり
            </Link>
          </li>

          <div style={{ width: "50px" }}>
            <div style={{ margin: "10px", fontSize: "x-large" }}>
              {/* <FontAwesomeIcon icon={faYoutube} className="" /> */}
            </div>
          </div>
          <li className={Styles.ListName}>
            <Link className={Styles.Link} to="/blog">
              ブログ
            </Link>
          </li>

          <div style={{ width: "50px" }}>
            <div style={{ margin: "10px", fontSize: "x-large" }}>
              {/* <FontAwesomeIcon icon={faBlog} className="" /> */}
            </div>
          </div>
          <li className={Styles.ListName}>
            <Link className={Styles.Link} to="/Music">
              ひとときの時間
            </Link>
          </li>

          <div style={{ width: "50px" }}>
            <div style={{ margin: "10px", fontSize: "x-large" }}>
              {/* <FontAwesomeIcon icon={faEnvelope} className="" /> */}
            </div>
          </div>
          <li className={Styles.ListName}>
            <Link className={Styles.Link} to="/Contact">
              お問い合わせ
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default sidebar;
