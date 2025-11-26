import React from "react";
import Sidebar from "@/app/components/layouts/sidebar/sidebar";
import Styles from "@/app/pages/MusicPage/Music.module.css";
import Image from "next/image";
import counter from "@/public/BackImage/counter.webp";
import { Link } from "react-router-dom";

const Music = () => {
  return (
    <>
      <Sidebar />
      <section className={Styles.section}>
        <h1 className={Styles.header}>ひとときの時間</h1>
        <ul className={Styles.coment}>
          ラーメンと音楽（ここでは趣味の音楽を紹介しています）
          <li className={Styles.list}>
            ①演歌 （与作...北島三郎）
            <br />
            老舗の感じで
          </li>
          <li className={Styles.list}>②JPoP（）</li>
          <li className={Styles.list}>
            ③Ctiy Music （真夜中のドア～Stay With Me...松原みき）
            <br />
            海外のBGMの感じで
          </li>
          <li className={Styles.list}>
            ④Jazz（ノラ・ジョーンズ）
            <br />
            カフェのような落ち着いた感じで
          </li>
          <li className={Styles.list}>
            ⑤radio Music（）
            <br />
            月毎に曲のジャンルを変えて店内の雰囲気を変える
          </li>
        </ul>
        <figure>
          <Image
            src={counter}
            alt="main"
            width={400}
            height={100}
            className={Styles.image}
          />
          <p className={Styles.description}>
            音楽ひとつで店内の雰囲気が変わるものですね
            <br />
            皆さんは普段どんな音楽を聴きますか？食事をする時はどんな音楽が合うと思いますか？？
          </p>
          <button className={Styles.submitButton}>
            <Link to="/blog">
              <p>コメントお待ちしています</p>
              <p>↓↓↓↓↓↓</p>
              <a>Click</a>
            </Link>
          </button>
        </figure>
      </section>
    </>
  );
};

export default Music;
