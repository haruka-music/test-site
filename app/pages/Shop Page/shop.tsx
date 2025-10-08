import React from "react";
import Styles from "@/app/pages/Shop Page/shop.module.css";
import Image from "next/image";
import Sidebar from "@/app/components/layouts/sidebar/sidebar";
import Hanamichi from "@/public/noodle/hanamichi.jpg";
import Shiogensi from "@/public/noodle/siogensi.webp";

const shop = () => {
  return (
    <>
      <Sidebar />
      <section className={Styles.section}>
        <h1 className={Styles.headline}>お店情報</h1>
        <ul className={Styles.grid}>
          <li className={Styles.GridItem}>
            <article className={Styles.card}>
              <a href="#" className={Styles.CardLink}>
                <span className={Styles.CardLabel}>New</span>
                <Image src={Hanamichi} alt="main" width={400} height={100} />
                <div className={Styles.CardInfo}>
                  <time datetime="2025-01-01">2025.01.01</time>
                  <h1 className={Styles.CardHeadline}>麺匠 はなみち</h1>
                  <p className={Styles.description}>
                    スープの味は三種類から選べるのが楽しめます
                  </p>
                </div>
              </a>
            </article>
          </li>
        </ul>
        <ul className={Styles.grid}>
          <li className={Styles.GridItem}>
            <article className={Styles.card}>
              <a href="#" className={Styles.CardLink}>
                <span className={Styles.CardLabel}>New</span>
                <Image src={Shiogensi} alt="main" width={400} height={100} />
                <div className={Styles.CardInfo}>
                  <time datetime="2025-01-01">2025.01.01</time>
                  <h1 className={Styles.CardHeadline}>塩元師 （大阪）</h1>
                  <p className={Styles.description}>
                    トッピングも豊富で柚子が効いてて最高！！
                  </p>
                </div>
              </a>
            </article>
          </li>
        </ul>
      </section>
    </>
  );
};

export default shop;
