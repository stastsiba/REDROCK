import styles from "./HeaderTitle.module.css"

export const HeaderTitle = () => {
    return( 
        <div className={styles.title}>
            <div className={styles.logo}>
                <a className={styles.logoLink} href="/">RED<span className={styles.logoSPN}>GROUP </span></a>
            </div>
            <div className={styles.socialButton}>
                <button className={styles.telegram}><span className={styles.buttonNameTelegram}>Telegram</span></button>
                <button className={styles.cabinet}><span className={styles.buttonNameCabinet}>Личный кабинет</span></button>
            </div>
        </div>
    )
}