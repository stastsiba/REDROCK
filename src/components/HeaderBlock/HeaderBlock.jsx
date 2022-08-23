import styles from "./HeaderBlock.module.css";

export const HeaderBlock = () => {
  return (
    <div className={styles.HeaderBlockWrapper}>
      <div className={styles.headerBlockNewChit}>
        <h2 className={styles.HeaderBlockTitle}>
          RedRock новый <span className={styles.HeaderBlockTitleSpn}>чит!</span>
        </h2>
        <p className={styles.HeaderBlockParagraph}>
          We are one of the largest boosting and in-game currency broker
          services in the world, boasting a large customer base and unparalleled
          customer service. The best boosters earn $5,000+ and the best sellers
          have a $50,000+ monthly turnover. Apply today to join their ranks!
        </p>
        <div className={styles.numbersWrapper}>
          <div className={styles.numberOfPlayers}>
            <h3 className={styles.numberOfPlayersTitle}>1 600 000 +</h3>
            <p className={styles.numberOfPlayersParagraph}>количество <br/> игроков в PUBG</p>
          </div>
          <div className={styles.quantityWithCheat}>
            <h3 className={styles.quantityWithCheatTitle}>300 +</h3>
            <p className={styles.quantityWithCheatParagraph}>игроков <br/>с нашим читом RedRock</p>
          </div>
        </div>
      </div>
      <div className={styles.headerBlockRightImage}>
        <img
          className={styles.headerBlockImage}
          src="image/header-image.png"
          alt="Image"
        />
      </div>
    </div>
  );
};
