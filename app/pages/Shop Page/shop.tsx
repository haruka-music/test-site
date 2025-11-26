import React from "react";
import Styles from "@/app/pages/Shop Page/shop.module.css";
import Image from "next/image";
import Sidebar from "@/app/components/layouts/sidebar/sidebar";
import Hanamichi from "@/public/noodle/hanamichi.jpg";
import Shiogensi from "@/public/noodle/siogensi.webp";
import Rekishi from "@/public/noodle/rekishi.jpg";
import Niryohan from "@/public/noodle/niryohan.webp";
import Arakaze from "@/public/noodle/arakaze.webp";
import Butayama from "@/public/noodle/butayama.jpg";

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
                <p className={Styles.description}>
                  麺のこだわりは他店と比べて特別にしています、ぜひ一度ご賞味下さい
                  <br />
                  <br />
                  <br />
                  お問い合わせ: 06-6308-2039
                  <br />
                  <br />
                  住所: 大阪府大阪市淀川区十三本町1-1-14
                  <br />
                  <br />
                  営業時間:11:30 - 00:00
                  （営業時間・定休日は変更となる場合がございますので、ご来店前に店舗にご確認ください。）
                  <br />
                  <br />
                  交通手段: 阪急十三駅西口から徒歩1分 十三駅から43m
                </p>
              </a>
              <div className={Styles.CardInfo}>
                <time dateTime="2025-01-01">2025.01.01</time>
                <h1 className={Styles.CardHeadline}>麺匠 はなみち</h1>
              </div>
            </article>
          </li>
        </ul>
        <ul className={Styles.grid}>
          <li className={Styles.GridItem}>
            <article className={Styles.card}>
              <a href="#" className={Styles.CardLink}>
                <span className={Styles.CardLabel}>New</span>
                <Image src={Shiogensi} alt="main" width={400} height={100} />
                <p className={Styles.description}>
                  トッピングも豊富で柚子が効いてて最高！！
                  <br />
                  <br />
                  <br />
                  お問い合わせ: 06-6886-3331
                  <br />
                  <br />
                  住所: 大阪府大阪市淀川区木川東3-6-24
                  <br />
                  <br />
                  営業時間:月曜日〜金曜日 11時～15時、18時～24時
                  土・日・祝・大型連休中 11時～24時
                  <br />
                  <br />
                  ※【秋の店舗限定麺】販売のお知らせ 10/6(月)～11/30(日)の期間、
                  本店尼崎塩元帥と共同開発した店舗限定麺『背脂醤油ラーメン』を販売致します。(数量限定)
                  詳細は期間限定メニューページをご確認下さい。
                  <br />
                  <br />
                  交通手段: 阪急十三駅西口から徒歩1分 十三駅から43m
                </p>
              </a>
              <div className={Styles.CardInfo}>
                <time dateTime="2025-01-01">2025.01.01</time>
                <h1 className={Styles.CardHeadline}>塩元師 （西中島）</h1>
              </div>
            </article>
          </li>
        </ul>
        <ul className={Styles.grid}>
          <li className={Styles.GridItem}>
            <article className={Styles.card}>
              <a href="#" className={Styles.CardLink}>
                <span className={Styles.CardLabel}>New</span>
                <Image src={Rekishi} alt="main" width={400} height={100} />
                <p className={Styles.description}>
                  こちらのラーメンは、とにかく見た目のインパクト大！もりもりに盛られたお野菜は、ボリューム満点です。ただ見た目とは裏腹に、お味はくどくないのでぺろりと食べられてしまいます。またぜひ行きたいお店です。
                  <br />
                  <br />
                  <br />
                  お問い合わせ: じゃらん旅行ガイドを見たと伝えるとスムーズです。
                  06-6195-5910
                  <br />
                  <br />
                  住所: 大阪府大阪市淀川区十三本町1-1-14
                  <br />
                  <br />
                  営業時間: 月～土、祝日、祝前日: 11:00～15:0018:00～翌0:00
                  定休日：日
                  <br />
                  <br />
                  交通手段:
                  阪急下新庄駅下車南へ徒歩5分。下新庄小学校前を通過し、右折です。
                </p>
              </a>
              <div className={Styles.CardInfo}>
                <time dateTime="2025-01-01">2025.01.01</time>
                <h1 className={Styles.CardHeadline}>ラーメン荘 歴史を刻め</h1>
              </div>
            </article>
          </li>
        </ul>
        <ul className={Styles.grid}>
          <li className={Styles.GridItem}>
            <article className={Styles.card}>
              <a href="#" className={Styles.CardLink}>
                <span className={Styles.CardLabel}>New</span>
                <Image src={Niryohan} alt="main" width={400} height={100} />
                <p className={Styles.description}>
                  昔ながらのラーメンは懐かしく、、パラパラチャーハンや餃子との相性もとても良さそう。常連客の多いお店です
                  <br />
                  <br />
                  <br />
                  お問い合わせ: 06-6974-9238
                  <br />
                  <br />
                  住所: 〒537-0024 大阪市東成区東小橋3丁目9番21号
                  <br />
                  <br />
                  営業時間: 月、火、木、金、土、日 11:00 - 03:00 終了 02:45 水曜
                  閉鎖 ラストオーダーは午前2時45分頃
                  営業時間・定休日は変更になる場合がございますので、ご来店前に店舗にご確認ください。
                  <br />
                  交通手段: 近鉄大阪線・奈良線「鶴橋駅」東口より徒歩3分
                  大阪メトロ千日前線「鶴橋駅」5番出口より徒歩3分
                  JR大阪環状線「鶴橋駅」中央口より徒歩4分 鶴橋から304メートル。
                </p>
              </a>
              <div className={Styles.CardInfo}>
                <time dateTime="2025-01-01">2025.01.01</time>
                <h1 className={Styles.CardHeadline}>
                  二菱半 鶴橋本店（二半両鶴橋本店）
                </h1>
              </div>
            </article>
          </li>
        </ul>
        <ul className={Styles.grid}>
          <li className={Styles.GridItem}>
            <article className={Styles.card}>
              <a href="#" className={Styles.CardLink}>
                <span className={Styles.CardLabel}>New</span>
                <Image src={Arakaze} alt="main" width={400} height={100} />
                <p className={Styles.description}>
                  亭主相変わらずの無口。 今日は目すら合わせず、
                  オーダーのチケットさえ見ずに カウンター放置。
                  ここまできたら、もはや、 コミ障の内向性気質？
                  <br />
                  スープは醤油ベースに 鶏ガラに、豚骨の動物系に
                  魚介、魚節系をミックスした、 なかなか絶妙なバランスです。
                  <br />
                  <br />
                  <br />
                  お問い合わせ: 072-813-2145
                  <br />
                  <br />
                  住所: 〒537-0024 大阪市東成区東小橋3丁目9番21号
                  <br />
                  <br />
                  [日・火〜金・土・祝・祝前] ランチ 11:30 〜 14:30 ディナー
                  18:00 〜 21:30
                  <br />
                  京阪本線 / 萱島駅 徒歩22分（1.7km） 京阪本線 /
                  大和田（大阪）駅 徒歩24分（1.9km） JR片町線(学研都市線) /
                  四条畷駅（2.5km）
                </p>
              </a>
              <div className={Styles.CardInfo}>
                <time dateTime="2025-01-01">2025.01.01</time>
                <h1 className={Styles.CardHeadline}>嵐風 ARAKAZE</h1>
              </div>
            </article>
          </li>
        </ul>
        <ul className={Styles.grid}>
          <li className={Styles.GridItem}>
            <article className={Styles.card}>
              <a href="#" className={Styles.CardLink}>
                <span className={Styles.CardLabel}>New</span>
                <Image src={Butayama} alt="main" width={400} height={100} />
                <p className={Styles.description}>
                  店内は食券タイプでお昼にはよく列ができているイメージです。
                  <br />
                  腰の強い平打ち太麺で
                  こってり濃厚スープまで完食とは行きませんが?
                  たまに頂きたくなる、ガッツリ二郎系、こんな一杯もたまには良いですね。
                  <br />
                  <br />
                  <br />
                  お問い合わせ: 06-6476-7767
                  <br />
                  <br />
                  阪急十三駅（東口）徒歩30秒
                  大阪シティバス十三バス停（大阪駅バスターミナル6番のりばから97号系統加島駅行き・69号系統三津屋経由榎木橋行きで）から商店街、阪急十三駅下の地下道を西から東へ抜けて東口へ。徒歩約5分
                  十三駅から34m
                  <br />
                  <br />
                  ■ 営業時間
                  営業時間・休業日は変更となる場合がございますので、HPにて最新情報をご確認ください
                  ■ 定休日 無休
                  <br />
                  京阪本線 / 萱島駅 徒歩22分（1.7km） 京阪本線 /
                  大和田（大阪）駅 徒歩24分（1.9km） JR片町線(学研都市線) /
                  四条畷駅（2.5km）
                </p>
              </a>
              <div className={Styles.CardInfo}>
                <time dateTime="2025-01-01">2025.01.01</time>
                <h1 className={Styles.CardHeadline}>ラーメン豚山 十三東口店</h1>
              </div>
            </article>
          </li>
        </ul>
      </section>
    </>
  );
};

export default shop;
