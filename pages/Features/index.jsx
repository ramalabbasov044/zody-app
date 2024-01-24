/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-img-element */
import Description from '@/shared/components/Description'
import Title from '@/shared/components/Title'
import Footer from '@/shared/components/Footer'
import Header from '@/shared/components/Header'

import { useRouter } from 'next/router'
import styles from './style.module.css'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const Features = () => {
    const { push } = useRouter()
    const [moveAmount, setMoveAmount] = useState(0);

    useEffect(() => {
        let prevScrollY = 0;

        const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const newMoveAmount = scrollPosition * 0.2;

        const imageElements = document.querySelectorAll('.stoneImage');

        imageElements.forEach((imageElement) => {
            imageElement.style.transition = '1s';
        });

        prevScrollY = scrollPosition;
        setMoveAmount(newMoveAmount);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
      <div className={styles.Wrapper}>
        <Head>
          <title>
             Features Page
          </title>

        </Head>

        <img
            src="/stars.png"
            alt='background'
            className={styles.Background}
        /> 


        <img
            src="/stars.png"
            alt='background'
            className={styles.Background2}
        /> 

        <img
            src="/stars.png"
            alt='background'
            className={styles.Background3}
        /> 

        <Header />

        <main className={styles.Main}>
          <div className={styles.ContentOne}>
                <img 
                    src="/features/stons/stons.svg" 
                    alt="background"
                    className={styles.BackgroundImage}
                    style={{ bottom: `${moveAmount + 1}px` }}
                />

                <div className={styles.ContentLeft}>
                    <Description
                        title={"Everything about astrology"}
                        margin={"10px"}
                        size={"60px"}
                        weight={500}
                        mwidth={"535px"}
                    />

                    <Title
                        title={"Astrology reveals how celestial patterns at birth may impact our character and life's path. It invites us to study the planets and stars, offering insights into the energies that shape our daily lives. This time-honored tradition connects us with the cosmos, helping us to comprehend life's deeper forces and find direction and wisdom in the grand scheme of existence."}
                        size={"16px"}
                        color={"#fff"}
                        margin={"10px"}
                        mwidth={"603px"}
                        weight={400}
                    />

                    <img
                        src="/mobile/phone.svg"
                        alt="mobile"
                        className={styles.mobilePhone1}
                    />

                    <img
                        src="/mobile/phone7.svg"
                        alt="phone"
                        className={styles.mobilePhone7}
                        data-aos-duration="2000"
                        data-aos="zoom-out"
                    />
                </div>

                <div>
                    <Image
                        src="/features/phone/phonebackground.svg"
                        className={styles.ContentPhoneImage}
                        data-aos="zoom-out"
                        alt='phone image'
                        width={756}
                        height={612}
                        data-aos-duration="2000"
                    />
                    <Image
                        src="/features/phone/phone1.svg"
                        className={styles.ContentPhoneImage2}
                        data-aos="zoom-in"
                        alt='phone image'
                        width={756}
                        height={612}
                        data-aos-duration="2500"
                    />
                </div>
                
                <div onClick={() => push("#section2")} className={styles.BottomArrow}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2683 20.7072C11.4558 20.8947 11.7101 21 11.9753 21C12.2404 21 12.4948 20.8947 12.6823 20.7072L18.3393 15.0502C18.4348 14.958 18.511 14.8476 18.5634 14.7256C18.6158 14.6036 18.6434 14.4724 18.6445 14.3396C18.6457 14.2068 18.6204 14.0752 18.5701 13.9523C18.5198 13.8294 18.4456 13.7177 18.3517 13.6238C18.2578 13.5299 18.1461 13.4557 18.0232 13.4054C17.9003 13.3551 17.7687 13.3298 17.6359 13.331C17.5031 13.3321 17.3719 13.3597 17.2499 13.4121C17.1279 13.4645 17.0175 13.5407 16.9253 13.6362L12.9753 17.5862L12.9753 4.34321C12.9753 4.078 12.8699 3.82364 12.6824 3.63611C12.4949 3.44857 12.2405 3.34321 11.9753 3.34321C11.7101 3.34321 11.4557 3.44857 11.2682 3.63611C11.0806 3.82364 10.9753 4.078 10.9753 4.34321L10.9753 17.5862L7.02528 13.6362C6.83668 13.4541 6.58408 13.3533 6.32188 13.3555C6.05969 13.3578 5.80887 13.463 5.62347 13.6484C5.43806 13.8338 5.33289 14.0846 5.33061 14.3468C5.32833 14.609 5.42912 14.8616 5.61128 15.0502L11.2683 20.7072Z" fill="white"/>
                    </svg>
                </div>
          </div>

          <div id='section2' className={styles.ContentTwo}>
            <img 
                src="/features/stons/stons2.svg" 
                alt="background" 
                className={styles.BackgroundImage2}
                style={{ bottom: `${moveAmount + -97}px` }}
            />
              <div className={styles.ContentLeft2}>
                    <Description
                        title={"Match"}
                        margin={"10px"}
                        size={"60px"}
                        weight={500}
                        mwidth={211}
                    />

                    <Title
                        title={"Meet your match with our dating feature. See profiles that match your zodiac sign. Like a profile to show interest. If they like you back, it's a match. Start chatting and see where the stars take you!"}
                        size={"16px"}
                        color={"#fff"}
                        margin={"10px"}
                        mwidth={"463px"}
                        weight={400}
                    />

                    <img
                        src="/mobile/phone2.svg"
                        alt="mobilePhone"
                        className={styles.mobilePhone2}
                    />

                    <img
                        src="/mobile/phone9.svg"
                        alt="mobilePhone"
                        className={styles.mobilePhone9}
                    />
              </div>

              {/* <Image
                  src="/features/phone/phone2.svg"
                  alt='Phone Image'
                  data-aos="zoom-in-up"
                  data-aos-duration="1500"
                  width={796}
                  height={566}
                  className={styles.PhoneImageTwo}
              /> */}

                <Image
                    src="/features/phone/background.svg"
                    alt='Phone Image'
                    data-aos="zoom-in-up"
                    data-aos-duration="2000"
                    width={515}
                    height={515}
                    className={styles.phoneBackground}
                />
               <Image
                    src="/features/phone/iphonr.png"
                    alt='Phone Image'
                    data-aos="zoom-in"
                    data-aos-duration="2500"
                    width={352}
                    height={586}
                    className={styles.simplePhone}
              />
              
                <div onClick={() => push("#section3")} className={styles.BottomArrow}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2683 20.7072C11.4558 20.8947 11.7101 21 11.9753 21C12.2404 21 12.4948 20.8947 12.6823 20.7072L18.3393 15.0502C18.4348 14.958 18.511 14.8476 18.5634 14.7256C18.6158 14.6036 18.6434 14.4724 18.6445 14.3396C18.6457 14.2068 18.6204 14.0752 18.5701 13.9523C18.5198 13.8294 18.4456 13.7177 18.3517 13.6238C18.2578 13.5299 18.1461 13.4557 18.0232 13.4054C17.9003 13.3551 17.7687 13.3298 17.6359 13.331C17.5031 13.3321 17.3719 13.3597 17.2499 13.4121C17.1279 13.4645 17.0175 13.5407 16.9253 13.6362L12.9753 17.5862L12.9753 4.34321C12.9753 4.078 12.8699 3.82364 12.6824 3.63611C12.4949 3.44857 12.2405 3.34321 11.9753 3.34321C11.7101 3.34321 11.4557 3.44857 11.2682 3.63611C11.0806 3.82364 10.9753 4.078 10.9753 4.34321L10.9753 17.5862L7.02528 13.6362C6.83668 13.4541 6.58408 13.3533 6.32188 13.3555C6.05969 13.3578 5.80887 13.463 5.62347 13.6484C5.43806 13.8338 5.33289 14.0846 5.33061 14.3468C5.32833 14.609 5.42912 14.8616 5.61128 15.0502L11.2683 20.7072Z" fill="white"/>
                    </svg>
                </div>
          </div>

            <div id='section3' className={styles.ContentOne}>
                {/* <Image
                    className={styles.starBackground}
                    src="/features/stars/stars.svg"
                    alt='star'
                    width={1512}
                    height={1000}
                /> */}
              <img 
                    src="/features/stons/stons.svg" 
                    alt="background" 
                    className={styles.BackgroundImage}
                    style={{ bottom: `${moveAmount + -170}px` }}
              />
              <div className={`${styles.ContentLeft} ${styles.ContentMobile}`}>
                    <Description
                        title={"Natal Chart"}
                        margin={"10px"}
                        size={"60px"}
                        weight={500}
                        mwidth={"350px"}
                    />

                    <Title
                        title={"Chart the positions of the planets at your birth to glean insights into your personal traits, strengths, and possible life paths.  The natal chart, a snapshot of the heavens at your moment of birth, serves as a celestial map to your individuality and potential. It's a tool for self-discovery, illuminating personal qualities and life challenges. Through its symbols, we can trace the contours of our destiny, finding clues to our aspirations and inherent capabilities. This astrological guide empowers us to navigate life's journey with greater self-awareness and purpose."}
                        size={"16px"}
                        color={"#fff"}
                        margin={"10px"}
                        mwidth={"554px"}
                        weight={400}
                    />

                    <img 
                        src="/mobile/phone3.svg" 
                        alt="background" 
                        className={styles.mobilePhone3}
                    />


                    <img 
                        src="/mobile/phone10.svg" 
                        alt="background" 
                        className={styles.mobilePhone10}
                    />
              </div>
                <Image
                        src="/features/phone/simplephone2.svg"
                        alt='Phone Image'
                        data-aos="zoom-in-up"
                        data-aos-duration="2000"
                        width={515}
                        height={515}
                        className={styles.phoneBackground2}
                    />
                <Image
                        src="/features/phone/iphone.svg"
                        alt='Phone Image'
                        data-aos="zoom-in"
                        data-aos-duration="2500"
                        width={352}
                        height={586}
                        className={styles.simplePhone2}
                />

                <div  onClick={() => push("#section4")} className={styles.BottomArrow}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2683 20.7072C11.4558 20.8947 11.7101 21 11.9753 21C12.2404 21 12.4948 20.8947 12.6823 20.7072L18.3393 15.0502C18.4348 14.958 18.511 14.8476 18.5634 14.7256C18.6158 14.6036 18.6434 14.4724 18.6445 14.3396C18.6457 14.2068 18.6204 14.0752 18.5701 13.9523C18.5198 13.8294 18.4456 13.7177 18.3517 13.6238C18.2578 13.5299 18.1461 13.4557 18.0232 13.4054C17.9003 13.3551 17.7687 13.3298 17.6359 13.331C17.5031 13.3321 17.3719 13.3597 17.2499 13.4121C17.1279 13.4645 17.0175 13.5407 16.9253 13.6362L12.9753 17.5862L12.9753 4.34321C12.9753 4.078 12.8699 3.82364 12.6824 3.63611C12.4949 3.44857 12.2405 3.34321 11.9753 3.34321C11.7101 3.34321 11.4557 3.44857 11.2682 3.63611C11.0806 3.82364 10.9753 4.078 10.9753 4.34321L10.9753 17.5862L7.02528 13.6362C6.83668 13.4541 6.58408 13.3533 6.32188 13.3555C6.05969 13.3578 5.80887 13.463 5.62347 13.6484C5.43806 13.8338 5.33289 14.0846 5.33061 14.3468C5.32833 14.609 5.42912 14.8616 5.61128 15.0502L11.2683 20.7072Z" fill="white"/>
                    </svg>
                </div>
          </div>

            
            
            <div id='section4'  className={styles.SimpleContent}>
            <Image
                src="/features/bg.svg"
                alt='background'
                width={588}
                height={625}
                className={styles.SimpleContentPhoneImage}
                data-aos="zoom-in"
                data-aos-duration="2000"
            />

            <Image
                src="/features/moon.svg"
                alt="moon Image"
                width={0}
                height={0}
                className={styles.moonImage}
            />

            <img
                src="/newI.png"
                alt="phone"
                className={styles.phoneImageEnd}
                data-aos="zoom-in"
                data-aos-duration="2500"
            />
            
            <Image
                src="/features/star.svg"
                alt="moon Image"
                width={0}
                height={0}
                className={styles.starImage}
                
            />

            
            <div className={`${styles.SimpleContentRight} ${styles.mobileContent2}`}>
                <Description
                    title={"Dream Interpretation"}
                    margin={"10px"}
                    size={"60px"}
                    weight={500}
                    mwidth={"417px"}
                />

                <Title
                    title={"Dream interpretation with astrology helps simplify the complex symbols of your dreams, revealing hidden desires and thoughts. It uses the positions of stars and planets to make sense of the subconscious, aiding in personal insight and growth. By connecting dreams to astrology, we can better understand ourselves and make informed choices for our future."}
                    size={"16px"}
                    color={"#fff"}
                    margin={"10px"}
                    mwidth={"563px"}
                    weight={400}
                />

                <img
                    src="/mobile/phone4.svg"
                    alt="phone"
                    className={styles.mobilePhone4}
                />

                    <img 
                        src="/mobile/phone11.svg" 
                        alt="background" 
                        className={styles.mobilePhone11}
                    />
            </div>

            <div onClick={() => push("#section5")} className={styles.BottomArrow}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2683 20.7072C11.4558 20.8947 11.7101 21 11.9753 21C12.2404 21 12.4948 20.8947 12.6823 20.7072L18.3393 15.0502C18.4348 14.958 18.511 14.8476 18.5634 14.7256C18.6158 14.6036 18.6434 14.4724 18.6445 14.3396C18.6457 14.2068 18.6204 14.0752 18.5701 13.9523C18.5198 13.8294 18.4456 13.7177 18.3517 13.6238C18.2578 13.5299 18.1461 13.4557 18.0232 13.4054C17.9003 13.3551 17.7687 13.3298 17.6359 13.331C17.5031 13.3321 17.3719 13.3597 17.2499 13.4121C17.1279 13.4645 17.0175 13.5407 16.9253 13.6362L12.9753 17.5862L12.9753 4.34321C12.9753 4.078 12.8699 3.82364 12.6824 3.63611C12.4949 3.44857 12.2405 3.34321 11.9753 3.34321C11.7101 3.34321 11.4557 3.44857 11.2682 3.63611C11.0806 3.82364 10.9753 4.078 10.9753 4.34321L10.9753 17.5862L7.02528 13.6362C6.83668 13.4541 6.58408 13.3533 6.32188 13.3555C6.05969 13.3578 5.80887 13.463 5.62347 13.6484C5.43806 13.8338 5.33289 14.0846 5.33061 14.3468C5.32833 14.609 5.42912 14.8616 5.61128 15.0502L11.2683 20.7072Z" fill="white"/>
                </svg>
            </div>
        </div>

        
            <div id='section5' className={styles.SimpleContentRe}>
            <img 
                src="/features/stons/stons.svg" 
                alt="background" 
                className={styles.BackgroundImage}
                style={{ bottom: `${moveAmount + -630}px` }}
            />
            {/* <Image
                className={styles.starBackground}
                src="/features/stars/stars.svg"
                alt='star'
                width={1512}
                height={1000}
            /> */}
            <div className={styles.SimpleContentReLeft}>
                <Description
                    title={"Chat"}
                    margin={"10px"}
                    size={"60px"}
                    weight={500}
                    mwidth={"149px"}
                />

                <Title
                    title={"Engage in real-time discussions with astrology enthusiasts and experts, broadening your horizons with every conversation. The chat lets you talk with other astrology fans, learn new things, and share your own insights. It's a welcoming place for all your questions and ideas. Talking with others can help you understand astrology better, clear up any confusion, and could even lead to new hobbies or friendships. It's a great way to get better at understanding astrology and to enjoy its rich details even more."}
                    size={"16px"}
                    color={"#fff"}
                    margin={"10px"}
                    mwidth={"610px"}
                    weight={400}
                />

                <img
                    src="/mobile/phone5.svg"
                    alt="mobile"
                    className={styles.mobilePhone5}
                />

                <img
                    src="/mobile/phone12.svg"
                    alt="mobile"
                    className={styles.mobilePhone12}
                />

            </div>
            <Image
                src="/features/newbg.svg"
                alt='phone Image'
                width={515}
                height={515}
                className={styles.phoneImageFive}
                data-aos="zoom-in-up"
                data-aos-duration="2000"
            />
            <Image
                src="/features/bubbles.svg"
                alt='phone Image'
                width={515}
                height={515}
                className={styles.bubbleImage}
                data-aos="zoom-in"
                data-aos-duration="2500"
            />

            <div onClick={() => push("#section6")} className={styles.BottomArrow}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.2683 20.7072C11.4558 20.8947 11.7101 21 11.9753 21C12.2404 21 12.4948 20.8947 12.6823 20.7072L18.3393 15.0502C18.4348 14.958 18.511 14.8476 18.5634 14.7256C18.6158 14.6036 18.6434 14.4724 18.6445 14.3396C18.6457 14.2068 18.6204 14.0752 18.5701 13.9523C18.5198 13.8294 18.4456 13.7177 18.3517 13.6238C18.2578 13.5299 18.1461 13.4557 18.0232 13.4054C17.9003 13.3551 17.7687 13.3298 17.6359 13.331C17.5031 13.3321 17.3719 13.3597 17.2499 13.4121C17.1279 13.4645 17.0175 13.5407 16.9253 13.6362L12.9753 17.5862L12.9753 4.34321C12.9753 4.078 12.8699 3.82364 12.6824 3.63611C12.4949 3.44857 12.2405 3.34321 11.9753 3.34321C11.7101 3.34321 11.4557 3.44857 11.2682 3.63611C11.0806 3.82364 10.9753 4.078 10.9753 4.34321L10.9753 17.5862L7.02528 13.6362C6.83668 13.4541 6.58408 13.3533 6.32188 13.3555C6.05969 13.3578 5.80887 13.463 5.62347 13.6484C5.43806 13.8338 5.33289 14.0846 5.33061 14.3468C5.32833 14.609 5.42912 14.8616 5.61128 15.0502L11.2683 20.7072Z" fill="white"/>
                </svg>
            </div>
        </div>

        
        
        <div id='section6' className={styles.MixedContent}>
            <Image
                src="/features/phone/simplebackground.svg"
                alt='phone Image'
                width={700}
                height={715}
                data-aos="zoom-in-up"
                className={styles.mixedImage}
                data-aos-duration="2000"
            />

            <Image
                src="/phone/home/new.svg"
                alt='phone Image'
                width={700}
                height={715}
                data-aos="zoom-in"
                className={styles.simplePhone3}
                data-aos-duration="2500"
            /> 

            <Image
                src="/features/phone/boxes.svg"
                alt='phone Image'
                width={700}
                height={715}
                data-aos="zoom-in"
                className={styles.simpleBoxes}
                data-aos-duration="3000"
            />              

            
            <img 
                src="/features/stons/stons.svg" 
                alt="background" 
                className={styles.BackgroundImageMixed}
                style={{ bottom: `${moveAmount + -730}px` }}
            />

            <div className={styles.MixedRight}>
                    <Description
                        title={"Numerology"}
                        margin={"10px"}
                        size={"60px"}
                        weight={500}
                        mwidth={"373px"}
                    />

                    <Title
                        title={"Numerology delves into the mystical relationship between numbers and life events. By analyzing your birth date and name, you can uncover your unique numerological profile, which offers insights into your innate strengths, challenges, and life purpose. This ancient practice helps in identifying favorable opportunities and potential obstacles, guiding your decisions and actions. Embracing numerology can lead to a greater understanding of your place in the world and how you interact with others, providing a complementary perspective to astrological interpretations."}
                        size={"16px"}
                        color={"#fff"}
                        margin={"10px"}
                        mwidth={"603px"}
                        weight={400}
                    />

                    <img
                        src="/mobile/phone6.svg"
                        alt="image"
                        className={styles.mobilePhone6}
                    />

                    <img 
                        src="/mobile/phone13.svg" 
                        alt="background" 
                        className={styles.mobilePhone13}
                    />
            </div>
        </div>



        </main>

        
        <Footer />
      </div>
    )
}

export default Features