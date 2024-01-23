/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react'
import styles from './style.module.css'

const Card = ({ detail , callBackId }) => {
    return (
      <div className={styles.card}>
          <img
              className={styles.cardImage}
              src={detail.image}
              alt='cardImage'
              width={274}
              height={211}
          />

          <p className={styles.cardTitle}>
              {
                detail.title
              }
          </p>

          <p className={styles.cardDescription}>
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