import styles from './StepsLine.module.scss';

const StepLine = () => {
    return (
        <div className={styles.line}></div>
    )
}

const StepsLine = ({count}) => {
    return(
        <>
        <div className={styles.lines}>
            {Array.from(Array(count).keys()).map(i => (
                <StepLine />
            ))}
        </div>
        </>
    )
}

export default StepsLine;