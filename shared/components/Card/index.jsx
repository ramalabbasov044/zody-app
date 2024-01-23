/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react'
import styles from './style.module.css'
import { useTranslation } from 'react-i18next';

const Card = ({ detail , callBackId }) => {
  const {i18n} = useTranslation()
    return (
      <div className={styles.card}>
          <img
              className={styles.cardImage}
              src={detail.image}
              alt='cardImage'
              width={274}
              height={211}
          />

          <p className={styles.cardTitle} style={{fontFamily: i18n.language == "ru" ? "Montserrat" : "Poppins"}}>
              {
                detail.title
              }
          </p>

          <p className={styles.cardDescription} style={{fontFamily: i18n.language == "ru" ? "Montserrat" : "Poppins"}}>
              {
                detail.content
              }
          </p>

          <div className={styles.cardBottom}>
              <button onClick={() => callBackId(detail.slug)} className={styles.readMoreButton}>
                Read More
              </button>

              <div className={styles.cardDate}>
                  {
                    detail.created_at
                  }
              </div>
          </div>
      </div>
    )
}

export default Card