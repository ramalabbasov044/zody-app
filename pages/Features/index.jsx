/* eslint-disable @next/next/no-sync-scripts */
/* eslint-disable @next/next/no-img-element */
import Description from '@/shared/components/Description'
import Title from '@/shared/components/Title'
import Footer from '@/shared/components/Footer'
import Header from '@/shared/components/Header'

import styles from './style.module.css'
import Head from 'next/head'
import Image from 'next/image'

const Features = () => {
    return (
      <div className={styles.Wrapper}>
        <Head>
          <title>
             Features Page
          </title>
            <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />
            <script defer src="https://unpkg.com/aos@2.3.1/dist/aos.js"></script>
            <script defer>
                AOS.init();
            </script>
        </Head>

        <Image
            className={styles.starBackground}
            src="/features/stars/stars.svg"
            alt='star'
            width={1512}
            height={1000}
        />

        <Header />

        <main  className={styles.Main}>
          <div className={styles.ContentOne}>
              <img 
                  src="/features/stons/stons.svg" 
                  alt="background" 
                  className={styles.BackgroundImage}
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
              </div>
              <Image
                  src="/features/phone/phone1.svg"
                  className={styles.ContentPhoneImage}
                  alt='phone image'
                  width={756}
                  height={612}
              />
          </div>

          <div className={styles.ContentTwo}>
            <img 
                src="/features/stons/stons2.svg" 
                alt="background" 
                className={styles.BackgroundImage2}
            />
              <div  data-aos="fade-up"
     data-aos-duration="3000"
                    className={styles.ContentLeft2}>
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
              </div>
              <Image
                  src="/features/phone/phone2.svg"
                  alt='Phone Image'
                  data-aos="zoom-in"
                  width={796}
                  height={566}
                  className={styles.PhoneImageTwo}
              />
          </div>

          <div className={styles.ContentOne}>
                <Image
                    className={styles.starBackground}
                    src="/features/stars/stars.svg"
                    alt='star'
                    width={1512}
                    height={1000}
                />
              <img 
                  src="/features/stons/stons.svg" 
                  alt="background" 
                  className={styles.BackgroundImage}
              />
              <div className={styles.ContentLeft}>
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
              </div>

              <Image
                  src="/features/phone/phone3.svg"
                  className={styles.SimpleContentPhoneImage}
                  alt='phone image'
                  width={756}
                  height={612}
              />
          </div>

            
            
            <div className={styles.SimpleContent}>
                <Image
                    src="/features/phone/phone4.svg"
                    alt='phone'
                    width={589}
                    height={625}
                    className={styles.SimpleContentPhoneImage}
                />
                
                <div className={styles.SimpleContentRight}>
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

                </div>
            </div>

            
            <div className={styles.SimpleContentRe}>
                <img 
                    src="/features/stons/stons.svg" 
                    alt="background" 
                    className={styles.BackgroundImage}
                />
                <Image
                    className={styles.starBackground}
                    src="/features/stars/stars.svg"
                    alt='star'
                    width={1512}
                    height={1000}
                />
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
                </div>
                <Image
                    src="/features/phone/phone5.svg"
                    alt='phone Image'
                    width={515}
                    height={515}
                    className={styles.phoneImageFive}
                />
            </div>

            <div className={styles.MixedContent}>
                <Image
                    src=""
                    alt=''
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
                </div>
            </div>
        </main>
        <Footer />
      </div>
    )
}

export default Features