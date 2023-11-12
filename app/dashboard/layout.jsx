import Sidebar from "../ui/dashboard/sidebar/sidebar"
import Navbar from "../ui/dashboard/navbar/navbar"
import { Noto_Music } from "next/font/google"
import styles from "../ui/dashboard/dashboard.module.css";

const layout = ({children}) => {
  return (
    <div className={styles.container}>
        <div className={styles.menu}>
            <Sidebar/>
        </div>
        <div className={styles.content}>
            <Navbar />
            {children}
        </div>
       </div>
  )
}

export default layout