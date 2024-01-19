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
        <div className={styles.ProductWrapper}>
            <Header />
            <img
                src="/stars.png"
                alt='background'
                className={styles.Background}
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
                </div>
            </main>
            
            <Footer />
        </div>
    )
}

export default Product