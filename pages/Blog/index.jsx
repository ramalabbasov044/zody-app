/* eslint-disable @next/next/no-img-element */
import Footer from '@/shared/components/Footer'
import Header from '@/shared/components/Header'
import Card from '@/shared/components/Card';
import styles from './style.module.css'

import { Routes } from '../../shared/constants/Routes/index'
import { getBlogData } from '../../services/index'

import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';


export default function Blog({ data }) {
    const { push } = useRouter()

    const [scrollPosition, setScrollPosition] = useState(0);
    const [isNavigation,setIsNavigation] = useState(false)
    const [moveAmount, setMoveAmount] = useState(0);
    const [slidesCount,setSlidesCount] = useState(4)
    const [space,setSpace] = useState(37)

    const callBackId = (id) => {
      push(Routes.Product(id))
    } 

    useEffect(() => {
      if(window.innerWidth > 1440){
        setSlidesCount(4)
      }else if(window.innerWidth < 1440 && window.innerWidth > 1150){
          setSlidesCount(3)
      }else if(window.innerWidth < 1150 && window.innerWidth > 850){
          setSlidesCount(2)
      }else if(window.innerWidth < 850){
        setSlidesCount(1)
      }else{
          setSlidesCount(1)
      }
    },[])

    useEffect(() => {
        if(window.innerWidth > 1480){
          setSpace(37)
        }else{
          setSpace(5)
        }
    },[])

    useEffect(() => {
        if(data.length > 4){
          setIsNavigation(true)
        }else {
          setIsNavigation(false)
        }
    }, [data])

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
    }, []);

    const initialPosition = 0; 
    const arrowTransform = `translate3d(0, ${initialPosition - scrollPosition * 0.5}px, 0)`;

 
    return (
      <div className={styles.Wrapper}>
        <Header />
            <img
                src="/background.svg"
                alt='background'
                className={styles.Background}
            /> 

            <img
                src="/blog/stones.svg"
                alt='background'
                className={styles.stonesImage}
                width={1512}
                height={0}
                style={{ transform: arrowTransform }}
            />

          <main className={styles.Main}>
              {
                data.length == 0 ? (
                  <span className={styles.loader}>
                      Loading
                  </span>
                ) : (
                  <div className={styles.content}>    
                          <Swiper
                              spaceBetween={space}
                              slidesPerView={slidesCount}
                              loop={true}
                              pagination={{
                                clickable: true,
                              }}
                              navigation={isNavigation}
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
                )
              }

              <div className={styles.mobilContent}>
                  <div className={styles.mobileCardBody}>
                        {
                          data.map((item) => (
                              <div key={item.id}>
                                  <Card 
                                      detail={item} 
                                      callBackId={callBackId}
                                  />
                              </div>  
                          ))
                        }
                  </div>
              </div>
          </main>

        <Footer />
      </div>
    )
}

export async function getServerSideProps({ query }) {
  try {
    console.log('Query parameters:', )

    const response = await getBlogData(query.LNG);

    return {
      props: {
        data: response.data.data,
      },
    };
  } catch (err) {
    console.error('Error fetching blog data:', err);

    return {
      props: {
        data: [],
      },
    };
  }
}