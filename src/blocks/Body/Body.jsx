import { SectionAndroid } from '../../components/SectionAndroid/SectionAndroid'
import { SectionIos } from '../../components/SectionIos/SectionIos'
import { SectionTariffs } from '../../components/SectionTariffs/SectionTariffs'
import styles from './Body.module.css'

export const Body = () => {
    return(
        <div className={styles.body}>
            <SectionAndroid /> 
            <SectionIos />
            <SectionTariffs />
        </div>
    )
}