/* eslint-disable @next/next/no-img-element */
import Footer from '@/shared/components/Footer'
import Header from '@/shared/components/Header'
import Data from '../../mock/data/data.json'
import styles from './style.module.css'

import { useRouter } from 'next/router'
import Image from 'next/image'

const Product = () => {
    const { asPath } = useRouter() 
    const CURRENTID = asPath.split("/")[2]
    let ProductDetail = Data.filter((item) => item.id == CURRENTID)

    return (
        <div>
            <Header />
            <Image
                src="/home/newBg.svg"
                alt='background'
                className={styles.ProductBackground}
                width={1512}
                height={0}
            />
            <Image
                src="/blog/stones.svg"
                alt='background'
                className={styles.stonesImage}
                width={1512}
                height={0}
            />
            <main className={styles.ProductMain}>
                <div className={styles.productContent}>
                    <div className={styles.productDetail}>
                        <p className={styles.productTitle}>
                            {
                                ProductDetail[0] ? ProductDetail[0].title : <></>
                            }
                        </p>

                        <p className={styles.productDescription}>
                            {
                                ProductDetail[0] ? ProductDetail[0].description : <></>
                            }
                        </p>

                        <p className={styles.productDate}>
                            {
                                ProductDetail[0] ? ProductDetail[0].date : <></>
                            }
                        </p>
                    </div>
                    <img
                        src={ProductDetail[0] ? ProductDetail[0].image : ""}
                        alt='productImage'
                        className={styles.productImage}
                    />
                    <div className={styles.arrow}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11.2683 20.7072C11.4558 20.8947 11.7101 21 11.9753 21C12.2404 21 12.4948 20.8947 12.6823 20.7072L18.3393 15.0502C18.4348 14.958 18.511 14.8476 18.5634 14.7256C18.6158 14.6036 18.6434 14.4724 18.6445 14.3396C18.6457 14.2068 18.6204 14.0752 18.5701 13.9523C18.5198 13.8294 18.4456 13.7177 18.3517 13.6238C18.2578 13.5299 18.1461 13.4557 18.0232 13.4054C17.9003 13.3551 17.7687 13.3298 17.6359 13.331C17.5031 13.3321 17.3719 13.3597 17.2499 13.4121C17.1279 13.4645 17.0175 13.5407 16.9253 13.6362L12.9753 17.5862L12.9753 4.34321C12.9753 4.078 12.8699 3.82364 12.6824 3.63611C12.4949 3.44857 12.2405 3.34321 11.9753 3.34321C11.7101 3.34321 11.4557 3.44857 11.2682 3.63611C11.0806 3.82364 10.9753 4.078 10.9753 4.34321L10.9753 17.5862L7.02528 13.6362C6.83668 13.4541 6.58408 13.3533 6.32188 13.3555C6.05969 13.3578 5.80887 13.463 5.62347 13.6484C5.43806 13.8338 5.33289 14.0846 5.33061 14.3468C5.32833 14.609 5.42912 14.8616 5.61128 15.0502L11.2683 20.7072Z" fill="white"/>
                        </svg>
                    </div>
                </div>
            </main>
            
            <Footer />
        </div>
    )
}

export default Product