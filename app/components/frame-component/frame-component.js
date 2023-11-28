'use client';
import styles from "./frame-component.module.scss";
import { usePathname } from 'next/navigation'

function FrameComponent({props}){

// ホームページ("/")以外はstyles.divを当てたいためpathの取得をしている
const pathname = usePathname()

  console.log(pathname)
    return(
        <div className={pathname=="/"?styles.homecss:styles.div}>
            <div>
                {props}
            </div>
        </div>
    )
}
export default FrameComponent