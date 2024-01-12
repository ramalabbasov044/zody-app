import { useState } from 'react';
import styles from './style.module.css'
const Button = ({ 
    title , color , weight , size , padding , shadow , background , radius , hoverBackground
}) => {
    const [isHovered, setIsHovered] = useState(false);

    const buttonStyle = {
        color: color,
        padding: padding,
        boxShadow: shadow,
        backgroundColor: isHovered ? hoverBackground : background,
        fontSize: size,
        fontWeight: weight,
        borderRadius: radius,
    };

    return (
        <button 
            style={buttonStyle}
            className={styles.Button}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {
                title
            }  
        </button>
    )
}

export default Button