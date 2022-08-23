import styles from "./SectionAndroid.module.css";

export const SectionAndroid = () => {
  return (
    <div className={styles.sectionAndroid}>
      <h2 className={styles.sectionAndroidTitle}>Платформы для нашего чита</h2>
      <div className={styles.sectionAndroidWrapper}>
        <div className={styles.sectionAndroidMobile}>
          <img className={styles.sectionAndroidMobileUltra} src="image/Samsung-S21-Ultra.png" alt="Mobile" />
          <img className={styles.sectionAndroidMobileSamsung} src="image/Samsung-1.png" alt="Mobile" />
          <img className={styles.sectionAndroidMobileFront} src="image/mobileFront.png" alt="Mobile" />
        </div>
        <div className={styles.sectionAndroidTextBlock}>
          <h2 className={styles.sectionAndroidTextBlockTitle}>Android</h2>
          <p className={styles.sectionAndroidTextBlockTitleParagraph}>
            Наш софт поддерживает все версии Android. После оплаты Вы получаете
            файл для установки нашего чита, а также, видео-инструкцию. Удалять
            старый PUBG MOBILE не требуется! Все работает на оригинальной
            версии. Вход в аккаунт работает со всех доступных сервисов.
          </p>
          <h3 className={styles.sectionAndroidTextBlockFunction}>Функционал:</h3>
          <ul className={styles.sectionAndroidTextBlockFunctionList}>
            <li className={styles.sectionAndroidTextBlockFunctionListLi}>WallHack - видеть противника сквозь стены</li>
            <li className={styles.sectionAndroidTextBlockFunctionListLi}>AimBot - автоматическая наводка на противнка (тело:голова)</li>
            <li className={styles.sectionAndroidTextBlockFunctionListLi}>LootHack - показывает все вещи сквозь стены</li>
            <li className={styles.sectionAndroidTextBlockFunctionListLi}>NoRecoil - антиотдача на любое оружие (можно настроить %)</li>
            <li className={styles.sectionAndroidTextBlockFunctionListLi}>JumpPring - можно заехать на любое здание с помощью авто.</li>
            <li className={styles.sectionAndroidTextBlockFunctionListLi}>
              AntiBlocked - профессиональный анти-бан, за который еще не было ни
              одного бана, даем гарантию в течение всего срока тарифа.
            </li>
          </ul>
          <div className={styles.sectionAndroidButtonBlock}>
            <button className={styles.sectionAndroidButtonBlockBtn}>
              <span>КУПИТЬ</span>
            </button>
            <p className={styles.sectionAndroidButtonBlockParagraph}>
              Если после оплаты у Вас возникли вопросы, то обращайтесь в{" "}
              <a href="#">TELEGRAM</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
