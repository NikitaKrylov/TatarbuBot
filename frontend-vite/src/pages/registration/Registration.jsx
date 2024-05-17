import { useState } from 'react'
import styles from './Registration.module.scss'
import Step1 from './step1/Step1'
import Step2 from './step2/Step2'
import Step3 from './step3/Step3'
import Step4 from './step4/Step4'
import Step5 from './step5/Step5'
import Step6 from './step6/Step6'
import Step7 from './step7/Step7'
import { useNavigate } from 'react-router-dom'


const Registration =()=>{
    const [step, setStep] = useState(1);
    const navigate = useNavigate();
    const increment = () =>{
        setStep(step+1);
    }
    const renderStep = () => {
        switch(step) {
            case 1: return <Step1 onClick={increment}/>;
            case 2: return <Step2 onClick={increment}/>;
            case 3: return <Step3 onClick={increment}/>;
            case 4: return <Step4 onClick={increment}/>;
            case 5: return <Step5 onClick={increment}/>;
            case 6: return <Step6 onClick={increment}/>;
            case 7: return <Step7 onClick={increment}/>;
            case 8: return navigate("/")
            default: return <Step1 onClick={increment}/>;
        }
    };
    return (
        <section className={styles.section}> 
            <form action="">
            {renderStep()}
            </form>
        </section>
    )
};
export default Registration;