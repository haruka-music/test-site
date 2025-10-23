import React from "react";
import Styles from "@/app/pages/CommitmentPage/Commit.module.css";
import Sidebar from "@/app/components/layouts/sidebar/sidebar";

const Commit = () => {
  return (
    <>
      <Sidebar />
      <section className={Styles.section}>
        <h1 className={Styles.headline}>こだわり</h1>

        <ul className={Styles.grid}>
          <li className={Styles.GridItem}>
            <dl className={Styles.feature}>
              あなたはラーメンにこだわりはありますか？？
              <dt className={Styles.FHeadline}>こだわりその①</dt>
              <dd className={Styles.FDescripton}>
                お店の外観...提灯のや簾の雰囲気
              </dd>
              <dd className={Styles.FDescripton}></dd>
            </dl>
          </li>
          <li className={Styles.GridItem}>
            <dl className={Styles.feature}>
              <dt className={Styles.FHeadline}>こだわりその②</dt>
              <dd className={Styles.FDescripton}>
                メニューの数...ビールの種類
                <br />
                サイドメニューが豊富、
              </dd>
              <dd className={Styles.FDescripton}></dd>
            </dl>
          </li>
          <li className={Styles.GridItem}>
            <dl className={Styles.feature}>
              <dt className={Styles.FHeadline}>こだわりその③</dt>
              <dd className={Styles.FDescripton}>
                スープ・・・朝3時から煮込んだ豚骨スープ
                <br />
                トッピング・・・チャーシューの大きさ、メンマ、ネギ、唐辛子
              </dd>
            </dl>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Commit;
