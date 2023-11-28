import styles from "./head.module.scss";

function HeadComponent(){
    return(
        <>
            <div className={styles.headComponent}>
                <h1>【エンジニア面接】質問事項</h1>
                <p>今井 祐輔</p>
            </div>
        </>
    )
}
export default HeadComponent