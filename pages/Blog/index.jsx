/* eslint-disable @next/next/no-img-element */
import Footer from '@/shared/components/Footer'
import Header from '@/shared/components/Header'
import Card from '@/shared/components/Card';
import Data from '../../mock/data/data.json'
import { Routes } from '../../shared/constants/Routes/index'
import styles from './style.module.css'


import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import Image from 'next/image'

export default function Blog({ data }) {
    const { push } = useRouter()
    const callBackId = (id) => {
      push(Routes.Product(id))
    } 
    return (
      <div className={styles.Wrapper}>
        <Header />
          {/* <Image
              src="/home/newBg.svg"
              alt='background'
              className={styles.Background}
              width={1512}
              height={0}
          /> */}

          <Image
              src="/blog/stones.svg"
              alt='background'
              className={styles.stonesImage}
              width={1512}
              height={0}
          />
          
          <main className={styles.Main}>
              <div className={styles.content}>
                <Swiper
                    spaceBetween={37}
                    slidesPerView={4}
                    loop={true}
                    pagination={{
                      clickable: true,
                    }}
                    navigation={true}
                    modules={[Pagination, Navigation]}
                    className="mySwiper"
                >
                    {
                      data.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Card 
                                detail={item} 
                                callBackId={callBackId}
                            />
                        </SwiperSlide>
                      ))
                    }
                </Swiper>
              </div>
          </main>
        <Footer />
      </div>
    )
}

export async function getServerSideProps() {
  try {
    return {
     props: {
        data: Data,
      },
    }; 
  } catch (err) {
    console.error(err);
  }
}