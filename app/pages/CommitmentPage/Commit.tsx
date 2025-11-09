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
                メニューの数...セットメニュー、飲み物の種類、
                <br />
                サイドメニューが豊富、常連の方しか知らない隠しメニューなどもあったりするのかな？
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
                トッピング・・・チャーシューの大きさ、メンマ、ネギ、唐辛子、煮卵
              </dd>
            </dl>
          </li>
        </ul>
        <ul className={Styles.grid}>
          <li className={Styles.GridItem}>
            <dl className={Styles.feature}>
              あなたはおいしく感じる瞬間はありますか？
              <dt className={Styles.FHeadline}>こだわりその①</dt>
              <dd className={Styles.FDescripton}>
                人...亭主の対応、お客様の層
              </dd>
              <dd className={Styles.FDescripton}></dd>
            </dl>
          </li>
          <li className={Styles.GridItem}>
            <dl className={Styles.feature}>
              <dt className={Styles.FHeadline}>こだわりその②</dt>
              <dd className={Styles.FDescripton}>
                光...暖簾の色、店頭の灯り、食器の色
                <br />
                各店舗で入店した瞬間に感じる事があると思いますが、老舗の店雰囲気、新店舗の雰囲気など様々
                <br />
                お昼から行列が並ぶ店舗、夜中にしかオープンしない常連客が多い店舗など楽しみがありますね。
              </dd>
              <dd className={Styles.FDescripton}></dd>
            </dl>
          </li>
          <li className={Styles.GridItem}>
            <dl className={Styles.feature}>
              <dt className={Styles.FHeadline}>こだわりその③</dt>
              <dd className={Styles.FDescripton}>
                音・・・BGM、お店スタッフの声、料理の作る音、麺を啜る音
                <br />
                ここでの音はお客様が感じる音の事です、もう一度来てみたいと思える音。
                <br />
                その瞬間にあなたはもう常連になっているはずです
              </dd>
            </dl>
          </li>
        </ul>
      </section>
    </>
  );
};

export default Commit;
