import React from "react";
import Styles from "@/app/pages/CommitmentPage/Commit.module.css";

const Commit = () => {
  return (
    <>
      <section className={Styles.section}>
        <h1 className={Styles.headline}>
          あなたはラーメンにこだわりはありますか？？
        </h1>

        <ul className={Styles.grid}>
          <li className={Styles.GridItem}>
            <dl className={Styles.feature}>
              <dt className={Styles.FHeadline}>こだわりその①</dt>
              <dd className={Styles.FDescripton}>お店の外観</dd>
              <dd className={Styles.FDescripton}>・提灯のや簾の雰囲気</dd>
            </dl>
          </li>
          <li className={Styles.GridItem}>
            <dl className={Styles.feature}>
              <dt className={Styles.FHeadline}>こだわりその②</dt>
              <dd className={Styles.FDescripton}>メニューの数</dd>
              <dd className={Styles.FDescripton}>
                ビールの種類
                <br />
                サイドメニューが豊富
              </dd>
            </dl>
          </li>
          <li className={Styles.GridItem}>
            <dl className={Styles.feature}>
              <dt className={Styles.FHeadline}>こだわりその③</dt>
              <dd className={Styles.FDescripton}>スープ、トッピング</dd>
              <dd className={Styles.FDescripton}>
                スープ・・・
                <br />
                トッピング・・・
              </dd>
            </dl>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Commit;
