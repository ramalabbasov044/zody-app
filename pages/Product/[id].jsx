/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import Footer from '@/shared/components/Footer'
import Header from '@/shared/components/Header'
import styles from './style.module.css'

import { getBlogItem } from '../../services/index'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'

export default function Product () {
    const [moveAmount, setMoveAmount] = useState(0);
    const [scrollPosition, setScrollPosition] = useState(0);
    const [productDetail, setProductDetail] = useState([])

    const { i18n } = useTranslation()
    const { asPath } = useRouter()

    const CURRENTID = typeof window !== 'undefined' ? asPath.split("/")[2] : null
    const getDetail = async () => {
        try {
            const response = await getBlogItem(CURRENTID, i18n.language)
            setProductDetail(response.data.data)
        } catch (error) {
            console.log({ error })
        }
    }
  
    useEffect(() => {
      if (CURRENTID) {
        getDetail()
      }
    }, [i18n.language, CURRENTID])

    useEffect(() => {
            const handleScroll = () => {
            const newScrollPosition = window.scrollY;
            const newMoveAmount = newScrollPosition * 0.2;

            const imageElements = document.querySelectorAll('#stone');

            imageElements.forEach((imageElement) => {
                imageElement.style.transition = '1s';
            });

            setScrollPosition(newScrollPosition);
            setMoveAmount(newMoveAmount);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [moveAmount]);

    const initialPosition = 0; 
    const arrowTransform = `translate3d(0, ${initialPosition - scrollPosition * 0.5}px, 0)`;

    return (
        <div className={styles.ProductWrapper}>
            <Header />

            <img
                src="/background.svg"
                alt='background'
                className={styles.Background}
            /> 
            <Image
                src="/blog/stones.svg"
                alt='background'
                className={styles.stonesImage}
                style={{ transform: arrowTransform }}
                width={1512}
                height={0}
            />

            <main className={styles.ProductMain}>
                {
                    productDetail.length == 0 ? (
                        <span className={styles.loader}>
                            Loading
                        </span>
                    ) : (
                        <div className={styles.productContent}>
                            <div className={styles.productDetail}>
                                <p className={styles.productTitle}  style={{fontFamily: i18n.language == "ru" ? "Montserrat" : "Poppins"}} >
                                    {
                                        productDetail ? productDetail.title : <></>
                                    }
                                </p>

                                <p className={styles.productDescription}>
                                    {
                                        productDetail ? productDetail.content : <></>
                                    }
                                </p>

                                <p className={styles.productDate}>
                                    {
                                        productDetail ? productDetail.created_at : <></>
                                    }
                                </p>
                            </div>
                            <div className={styles.productImgBody}>
                                <img
                                    src={productDetail ? productDetail.image : ""}
                                    alt='productImage'
                                    className={styles.productImage}
                                />
                            </div>
                        </div>
                    )
                }
            </main>
            
            <Footer />
        </div>
    )
}