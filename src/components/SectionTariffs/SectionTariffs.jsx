import styles from "./SectionTariffs.module.css";

export const SectionTariffs = () => {
  return (
    <div className={styles.sectionTariffs}>
      <div className={styles.sectionTariffsTitle}>
        <h2 className={styles.sectionTariffsTitleText}>Тарифы RedRock</h2>
        <div className={styles.sectionTariffsTitleButton}>
          <button className={styles.sectionTariffsTitleButtonAndroid}>
            <span className={styles.sectionTariffsTitleButtonAndroidText}>
              Android
            </span>
          </button>
          <button className={styles.sectionTariffsTitleButtonIos}>
            <span className={styles.sectionTariffsTitleButtonIosText}>iOS</span>
          </button>
        </div>
      </div>
      <div className={styles.sectionTariffsIcon}>
      <div className={styles.sectionTariffsIconAndroidDefault}>
      <img
            
            src="icon/androidIcon.svg"
            alt="Android"
          />
          </div>
          <div className={styles.sectionTariffsIconAndroidNormal}>
        <img
            
            src="icon/androidIcon.svg"
            alt="Android"
          />
          </div>
          <div className={styles.sectionTariffsIconWrapper}>
            <img
              className={styles.sectionTariffsIconAndroid}
              src="icon/androidIcon.svg"
              alt="Android"
            />
            <img
              className={styles.sectionTariffsIconIos}
              src="icon/iphoneIcon.svg"
              alt="Iphone"
            />
          </div>
      </div>
      <div className={styles.sectionTariffsCard}>
        <div className={styles.sectionTariffsCardDefault}>
          <h2 className={styles.sectionTariffsCardDefaultTitle}>Default</h2>
          <ul className={styles.sectionTariffsCardDefaultTitleList}>
            <li className={styles.sectionTariffsCardDefaultTitleListLi}>
              Весь функционал чита
            </li>
            <li className={styles.sectionTariffsCardDefaultTitleListLi}>
              Поддержка 24/7 от менеджера
            </li>
            <li className={styles.sectionTariffsCardDefaultTitleListLi}>
              Доступ к новым функциям
            </li>
            <li className={styles.sectionTariffsCardDefaultTitleListLi}>
              Автоматические обновления чита
            </li>
            <li className={styles.sectionTariffsCardDefaultTitleListLiColor}>
              Гарантия на Anti-Ban (30 дней)
            </li>
          </ul>
          <div className={styles.sectionTariffsCardDefaultTitlePrice}>
            999 rub
          </div>
          <div className={styles.sectionTariffsCardDefaultTitleDays}>
            30 дней
          </div>
          <button className={styles.sectionTariffsCardDefaultTitleButton}>
            {" "}
            <span className={styles.sectionTariffsCardDefaultTitleButtonText}>
              ПЕРЕЙТИ К ОПЛАТЕ
            </span>
          </button>
        </div>
        <div className={styles.sectionTariffsCardNormal}>

          <h2 className={styles.sectionTariffsCardNormalTitle}>Normal</h2>
          <ul className={styles.sectionTariffsCardNormalTitleList}>
            <li className={styles.sectionTariffsCardNormalTitleListLi}>
              Весь функционал чита
            </li>
            <li className={styles.sectionTariffsCardNormalTitleListLi}>
              Поддержка 24/7 от менеджера
            </li>
            <li className={styles.sectionTariffsCardNormalTitleListLi}>
              Доступ к новым функциям
            </li>
            <li className={styles.sectionTariffsCardNormalTitleListLi}>
              Автоматические обновления чита
            </li>
            <li className={styles.sectionTariffsCardNormalTitleListLi}>
              Доступ к Beta-Версии
            </li>
            <li className={styles.sectionTariffsCardNormalTitleListLiColor}>
              Гарантия на Anti-Ban (90 дней)
            </li>
          </ul>
          <div className={styles.sectionTariffsCardNormalTitlePrice}>
            1899 rub
          </div>
          <div className={styles.sectionTariffsCardNormalTitleDays}>
            90 дней
          </div>
          <button className={styles.sectionTariffsCardNormalTitleButton}>
            {" "}
            <span className={styles.sectionTariffsCardNormalTitleButtonText}>
              ПЕРЕЙТИ К ОПЛАТЕ
            </span>
          </button>
        </div>
        <div className={styles.sectionTariffsCardUltra}>
          <h2 className={styles.sectionTariffsCardUltraTitle}>Ultra</h2>
          <ul className={styles.sectionTariffsCardUltraTitleList}>
            <li className={styles.sectionTariffsCardUltraTitleListLi}>
              Весь функционал чита
            </li>
            <li className={styles.sectionTariffsCardUltraTitleListLi}>
              Поддержка 24/7 от менеджера
            </li>
            <li className={styles.sectionTariffsCardUltraTitleListLi}>
              Доступ к новым функциям
            </li>
            <li className={styles.sectionTariffsCardUltraTitleListLi}>
              Автоматические обновления чита
            </li>
            <li className={styles.sectionTariffsCardUltraTitleListLi}>
              Доступ к Beta-Версии
            </li>
            <li className={styles.sectionTariffsCardUltraTitleListLiColor}>
              Доступ к iOS версии (навсегда)
            </li>
            <li className={styles.sectionTariffsCardUltraTitleListLiColor}>
              Гарантия на Anti-Ban (навсегда)
            </li>
          </ul>
          <div className={styles.sectionTariffsCardUltraTitlePrice}>
          3500 rub
          </div>
          <div className={styles.sectionTariffsCardUltraTitleDays}>Навсегда</div>
          <button className={styles.sectionTariffsCardUltraTitleButton}>
            <span className={styles.sectionTariffsCardUltraTitleButtonText}>
              ПЕРЕЙТИ К ОПЛАТЕ
            </span>
          </button>
        </div>
        <img
          className={styles.sectionTariffsStar}
          src="icon/starIcon.svg"
          alt="Star"
        />
      </div>
    </div>
  );
};
