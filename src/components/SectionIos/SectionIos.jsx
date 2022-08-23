import styles from "./SectionIos.module.css";

export const SectionIos = () => {
  return (
    <div className={styles.sectionIos}>
      <div className={styles.sectionIosWrapper}>
        <div className={styles.sectionIosBlockText}>
          <h2 className={styles.sectionIosBlockTextTitle}>iOS</h2>
          <p className={styles.sectionIosBlockTextTitleParagraph}>
            Наш софт поддерживает все версии iOS. После оплаты Вы получаете файл
            для установки нашего чита, а также, видео-инструкцию. Удалять старый
            PUBG MOBILE не требуется! Все работает на оригинальной версии. Вход
            в аккаунт работает со всех доступных сервисов.
          </p>
          <h3 className={styles.sectionIosBlockTextFunc}>Функционал:</h3>
          <ul className={styles.sectionIosBlockTextFuncList}>
            <li className={styles.sectionIosBlockTextFuncListLi}>
              WallHack - видеть противника сквозь стены
            </li>
            <li className={styles.sectionIosBlockTextFuncListLi}>
              AimBot - автоматическая наводка на противнка (тело:голова)
            </li>
            <li className={styles.sectionIosBlockTextFuncListLi}>
              LootHack - показывает все вещи сквозь стены
            </li>
            <li className={styles.sectionIosBlockTextFuncListLi}>
              NoRecoil - антиотдача на любое оружие (можно настроить %)
            </li>
            <li className={styles.sectionIosBlockTextFuncListLi}>
              JumpPring - можно заехать на любое здание с помощью авто.
            </li>
            <li className={styles.sectionIosBlockTextFuncListLi}>
              AntiBlocked - профессиональный анти-бан, за который еще не было ни
              одного бана, даем гарантию в течение всего срока тарифа.
            </li>
          </ul>
          <div className={styles.sectionIosBlockTextButton}>
            <button className={styles.sectionIosBlockTextButtonBtn}>
              <span className={styles.sectionIosBlockTextButtonBtnText}>
                КУПИТЬ
              </span>
            </button>
            <p className={styles.sectionIosBlockTextButtonParagraph}>
              Если после оплаты у Вас возникли вопросы, то обращайтесь в <a href="#">TELEGRAM</a> 
            </p>
          </div>
        </div>
        <div className={styles.sectionIosImage}>
          <img
            className={styles.sectionIosImageFront}
            src="image/iphoneFront.png"
            alt="Iphone"
          />
          <img
            className={styles.sectionIosImageSettings}
            src="image/iphoneFrontSettings.png"
            alt="Iphone"
          />
          <img
            className={styles.sectionIosImageBack}
            src="image/iphoneBack.png"
            alt="Iphone"
          />
        </div>
      </div>
    </div>
  );
};
