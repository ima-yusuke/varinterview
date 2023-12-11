import H2TitleComponent from "../components/title-component/h2title-component";
import Image from "next/image";
import styles from "./db.module.scss";
import DbPic1 from "../../public/dbPic1.png";
import DbPic2 from "../../public/dbPic2.png";
function DbPage(){
    return(
        <>
            <h1>データベースの繋ぎ方</h1>

            <section>

            {/* 繋ぎ方 */}
                <article>
                    <H2TitleComponent h2Title="繋ぎ方"></H2TitleComponent>
                    <Image src={DbPic1} alt="dbpic" className={styles.pic}></Image>
                    <Image src={DbPic2} alt="dbpic" className={styles.pic}></Image>
                </article>
            </section>
        </>
    )
}
export default DbPage
