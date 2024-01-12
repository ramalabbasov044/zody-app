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
        </Head>

        <Image
            className={styles.starBackground}
            src="/features/stars/stars.svg"
            alt='star'
            width={1512}
            height={1000}
        />

        <Header />

        <main className={styles.Main}>
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
                      mwidth={535}
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
              </div>
              <Image
                  src="/features/phone/phone2.svg"
                  alt='Phone Image'
                  width={796}
                  height={566}
                  className={styles.PhoneImageTwo}
              />
          </div>

          <div className={styles.ContentOne}>
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
                  src="/features/phone/phone1.svg"
                  className={styles.ContentPhoneImage}
                  alt='phone image'
                  width={756}
                  height={612}
              />
          </div>
        </main>

          <div className={styles.SimpleContent}>
            
          </div>
        <Footer />
      </div>
    )
}

export default Features