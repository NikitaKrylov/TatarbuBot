import styles from './Registration.module.scss'
import Step1 from './step1/Step1'
import Step2 from './step2/Step2'
import Step3 from './step3/Step3'
import Step4 from './step4/Step4'
import Step5 from './step5/Step5'
import Step6 from './step6/Step6'
import Step7 from './step7/Step7'

export default function Registration(){

    return (
        <section className={styles.section}> 
            <form action="">
                <Step6/>
            </form>
        </section>
    )
}