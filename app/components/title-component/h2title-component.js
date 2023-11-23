import styles from "./title-component.module.scss";
function H2TitleComponent({h2Title}){
    return(
        <h2 className={styles.h2Title}>{h2Title}</h2>
    )
}
export default H2TitleComponent