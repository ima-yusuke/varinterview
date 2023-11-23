import styles from "./frame-component.module.scss";

function FrameComponent({props}){
    return(
        <div className={styles.div}>
            <div>
                {props}
            </div>
        </div>
    )
}
export default FrameComponent