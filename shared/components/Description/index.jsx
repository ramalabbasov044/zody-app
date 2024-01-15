import React from 'react'
import styled from 'styled-components'
import styles from './style.module.css'

const DescriptionC = ({ mwidth , title , margin , size , weight }) => {
    const DescriptionStyle = {
        maxWidth: mwidth,
        margin: margin,
        fontSize: size,
        fontWeight: weight,
        color: '#fff'
    }

    return (
      <p data-aos="fade-up" data-aos-duration="3000" style={DescriptionStyle} className={styles.Description}>
          {
              title
          }
      </p>
    )
}

export default DescriptionC

