import styles from './StepsLine.module.scss';

const StepLine = () => {
    return (
        <div className={styles.line}></div>
    )
}

const StepsLine = () => {
    return(
        <>
        <div className={styles.lines}>
            <StepLine/>
            <StepLine/>
            <StepLine/>
            <StepLine/>
        </div>
        </>
    )
}

export default StepsLine;