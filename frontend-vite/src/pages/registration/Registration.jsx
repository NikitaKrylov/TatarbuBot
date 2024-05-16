import styles from './Registration.module.scss'
import Step1 from './step1/Step1'
import Step2 from './step2/Step2'

export default function Registration(){

    return (
        <section className={styles.section}> 
            <Step2/>
        </section>
    )
}