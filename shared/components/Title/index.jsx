import styles from './style.module.css'
const TitleComponent = ({ title , size , color , weight , mwidth , margin }) => {
    const TitleStyle = {
        color: color,
        fontSize: size,
        fontWeight: weight,
        maxWidth: mwidth,
        margin: margin,
    }

    return (
        <p style={TitleStyle} className={styles.Title}>
            {
                title
            }
        </p>
    )
}

export default TitleComponent