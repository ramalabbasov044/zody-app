/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import styles from './style.module.css'
const InputComponent = ({ type, name, placeholder, value, path , activePath , onInputChange }) => {
    const [activeInput,setActiveInput] = useState("")
    const handleChange = (val) => {
        onInputChange(name, val)
        setActiveInput(val)
    }
    return (
        <div className={styles.inputBox}>

            <img 
                src={activeInput.length <= 0 ? path : activePath}
                alt="inputIcon"
                className={styles.icon}
            />
            <input
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
export default InputComponent