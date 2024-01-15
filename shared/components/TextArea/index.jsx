/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import styles from './style.module.css'
const TextArea = ({ type, name, placeholder, value, onInputChange }) => {
    const [activeInput,setActiveInput] = useState("")
    const handleChange = (val) => {
        onInputChange(name, val)
        setActiveInput(val)
    }
    return (
        <div className={styles.inputBox}>
            <textarea
                type={type}
                name={name}
                style={{borderColor: activeInput.length <= 0 ? "#A67DFF" : "#E6D7FF",color: activeInput.length <= 0 ? "#DDCDFF" : "#FFF"}}
                placeholder={placeholder}
                value={value}
                onChange={(e) => handleChange(e.target.value)}
                className={styles.input}
            />
        </div>
    )
}
export default TextArea