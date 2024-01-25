import Image from "next/image";
import styles from "./page.module.scss";
import Link from "next/link";
import Pic01 from "../public/pic-01.jpg";
import Pic02 from "../public/pic-02.jpg";
import Pic03 from "../public/pic-03.jpg";
import Pic04 from "../public/pic-04.jpg";
import Pic05 from "../public/pic-05.jpg";
import Pic06 from "../public/pic-06.jpg";
import Pic07 from "../public/pic-07.jpg";
import Pic08 from "../public/pic-08.jpg";
import Pic09 from "../public/pic-09.jpg";
import Pic10 from "../public/pic-10.jpg";
import Pic11 from "../public/pic-11.jpg";
import Pic12 from "../public/pic-12.jpg";
import Pic13 from "../public/pic-13.jpg";
import Pic14 from "../public/pic-14.jpg";
import Pic15 from "../public/pic-15.jpg";
import Pic16 from "../public/pic-16.jpg";
import Pic17 from "../public/pic-17.jpg";
import Pic18 from "../public/pic-18.jpg";
import Pic19 from "../public/pic-19.jpg";
import Pic20 from "../public/pic-20.jpg";
import Pic21 from "../public/pic-21.jpg";
import Pic22 from "../public/pic-22.jpg";
import Pic23 from "../public/pic-23.jpg";
import Pic24 from "../public/pic-24.jpg";
import Pic25 from "../public/pic-25.jpg";
import Pic26 from "../public/pic-26.jpg";
import Pic27 from "../public/pic-27.jpg";
import Pic28 from "../public/pic-28.jpg";
import Pic29 from "../public/pic-29.jpg";
import Pic30 from "../public/pic-30.jpg";
import Pic31 from "../public/pic-31.jpg";

export default function Home() {
  const articleGallery = [
    { ID: 1, img: Pic01, title: "同期処理と非同期処理の違い" ,"url":"../../promsie"},
    { ID: 2, img: Pic02, title: "CookieとSessionの違い","url":"../../session" },
    { ID: 3, img: Pic03, title: "N + 1問題とは","url":"../../nproblem" },
    { ID: 4, img: Pic04, title: "app routerの特色" ,"url":"../../app-router"},
    { ID: 5, img: Pic05, title: "SSG ・SSRとは","url":"../../ssg-ssr" },
    { ID: 6, img: Pic06, title: "JWTとは" ,"url":"../../jwt"},
    { ID: 7, img: Pic07, title: "Session・LocalStorageとCookieの違い" ,"url":"../../session-localstroage"},
    { ID: 8, img: Pic08, title: "apiとは" ,"url":"../../api"},
    { ID: 9, img: Pic09, title: "Component命名法則" ,"url":"../../compo-name"},
    { ID: 10, img: Pic10, title: " Compile・Build・Deploy" ,"url":"../../build-deploy"},
    { ID: 11, img: Pic11, title: " Webpackについて" ,"url":"../../about-webpack"},
    { ID: 12, img: Pic12, title: "アジャイル・ウォーターフォール開発" ,"url":"../../agile-waterfall"},
    { ID: 13, img: Pic13, title: "Get・Post" ,"url":"../../get-post"},
    { ID: 14, img: Pic14, title: " アトミックデザイン(外部サイト)" ,"url":"https://spice-factory.co.jp/web/about-atmicdesign/"},
    { ID: 15, img: Pic15, title: " IPアドレス・DNS・ドメイン" ,"url":"../../ip-dns"},
    { ID: 16, img: Pic16, title: "ポート番号" ,"url":"../../portnumber"},
    { ID: 17, img: Pic17, title: "package.json" ,"url":"../../package-json"},
    { ID: 18, img: Pic18, title: " npm・NPM" ,"url":"../../npm-NPM"},
    { ID: 19, img: Pic19, title: "ブロック要素・インライン要素(外部サイト)" ,"url":"https://webst8.com/blog/css-display/"},
    { ID: 20, img: Pic20, title: "padding・margin(外部サイト)" ,"url":"https://web-camp.io/magazine/archives/27339"},
    { ID: 21, img: Pic21, title: " position:relativeとabsolute(Youtube)" ,"url":"https://youtu.be/UjSmGlJF-z4?si=LgL2rLmVyjEIKnBs"},
    { ID: 22, img: Pic22, title: "CORSとは" ,"url":"../../cors"},
    { ID: 23, img: Pic23, title: "Expressとは" ,"url":"../../express"},
    { ID: 24, img: Pic24, title: "インスタンス化とは" ,"url":"../../instantiation"},
    { ID: 25, img: Pic25, title: "データベース繋ぎ方" ,"url":"../../db"},
    { ID: 26, img: Pic26, title: "ハッシュ方法" ,"url":"../../hash"},
    { ID: 27, img: Pic27, title: "Git" ,"url":"../../git"},
    { ID: 28, img: Pic28, title: "Laravel" ,"url":"../../laravel"},
    { ID: 29, img: Pic29, title: "Laravel&Docker" ,"url":"../../laravel2"},
    { ID: 30, img: Pic30, title: "SQL" ,"url":"../../sql"},
    { ID: 31, img: Pic31, title: "ER図" ,"url":"../../er"}
  ];

  return (
    <>
      <section id={styles.section}>
        {articleGallery.map((value,key) => {
          return (
            <Link href={value.url}  key={key}>
              <article key={value.ID}>
                <Image src={value.img} alt="picture"></Image>
                <aside>
                <p className={styles.test}>{value.title}</p>
                <p>ハート</p>
                </aside>
              </article>
            </Link>
          );
        })}
      </section>
    </>
  );
}
