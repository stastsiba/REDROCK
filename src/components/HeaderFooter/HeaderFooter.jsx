import styles from "./HeaderFooter.module.css";
export const HeaderFooter = () => {
  return (
    <div className={styles.HeaderFooter}>
      <h2 className={styles.HeaderFooterTitle}>
        Какие у нас есть преимущества?
      </h2>
      <div className={styles.HeaderFooterWrapperAutomation}>
        <div className={styles.HeaderFooterSettings}>
          <img
            className={styles.HeaderFooterSettingsIcon}
            src="icon/settingsIcon.svg"
            alt="Icon"
          />
          <div className={styles.HeaderFooterSettingsBlock}>
            <h2 className={styles.HeaderFooterSettingsBlockTitle}>
              Automation of processes
            </h2>
            <p className={styles.HeaderFooterSettingsBlockParagraph}>
              All of our processes are automated as much as possible. We use
              bots to handle most basic functions, and we are also to make
              express payments within one day.
            </p>
          </div>
        </div>
        <div className={styles.HeaderFooterMessage}>
          <img
            className={styles.HeaderFooterSettingsIcon}
            src="icon/messageIcon.svg"
            alt="Icon"
          />
          <div className={styles.HeaderFooterSettingsBlock}>
            <h2 className={styles.HeaderFooterSettingsBlockTitle}>
              Automation of processes
            </h2>
            <p className={styles.HeaderFooterSettingsBlockParagraph}>
              All of our processes are automated as much as possible. We use
              bots to handle most basic functions, and we are also to make
              express payments within one day.
            </p>
          </div>
        </div>
        <div className={styles.HeaderFooterRuby}>
          <img
            className={styles.HeaderFooterSettingsIcon}
            src="icon/rubeIcon.svg"
            alt="Icon"
          />
          <div className={styles.HeaderFooterSettingsBlock}>
            <h2 className={styles.HeaderFooterSettingsBlockTitle}>
              Automation of processes
            </h2>
            <p className={styles.HeaderFooterSettingsBlockParagraph}>
              All of our processes are automated as much as possible. We use
              bots to handle most basic functions, and we are also to make
              express payments within one day.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
