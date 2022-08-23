import { HeaderBlock } from "../../components/HeaderBlock/HeaderBlock";
import { HeaderFooter } from "../../components/HeaderFooter/HeaderFooter";
import { HeaderTitle } from "../../components/HeaderTitle/HeaderTitle";
import styles from "./Header.module.css"

export const Header = () => {
    return (
        <div className={styles.header}>
            <HeaderTitle />
            <HeaderBlock />
            <HeaderFooter />
        </div>
    )
}