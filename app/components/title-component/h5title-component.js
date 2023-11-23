import styles from "./title-component.module.scss";
function H5TitleComponent({h5Title}){
    return(
        <h5 className={styles.h5Title}>{h5Title}</h5>
    )
}
export default H5TitleComponent