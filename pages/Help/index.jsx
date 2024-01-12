/* eslint-disable @next/next/no-img-element */
import Footer from '@/shared/components/Footer'
import Header from '@/shared/components/Header'

import styles from './style.module.css'
import Head from 'next/head'
import React, { useState } from 'react'
const Help = () => {
    const [activeTab,setActiveTab] = useState(true)
    console.log(activeTab);

    return (
      <div className={styles.Wrapper}>
        <Head>
          <title>
            Help Page
          </title>
        </Head>

        <img 
            src="/help/bg2.svg" 
            alt="background" 
            className={styles.BackgroundImage}
        />

        <Header />

        <main className={styles.Main}>
            <img 
                src="/help/bg.svg" 
                alt="Background" 
                className={styles.BackgroundImage2}
            />
            <div className={styles.Container}>
                <div className={styles.Content}>
                    <div className={styles.Tabs}>
                        <p onClick={() => setActiveTab(true)} className={`${styles.tabItem} ${activeTab ? `${styles.active}` : ""}`}>
                            Privacy and Policy
                        </p>
                        <p onClick={() => setActiveTab(false)} className={`${styles.tabItem} ${activeTab ? "" : `${styles.active}`}`}>
                            Term and conditions
                        </p>
                    </div>

                    <div className={styles.Border}>

                    </div>

                    <div className={styles.tabAbout}>
                        <p className={styles.tabAboutTitle}>
                            {
                              activeTab ? (
                                  "Gizliliğiniz önceliğimizdir. Uçtan uca şifreleme ile kişisel mesajlarınızın sizinle gönderdiğiniz kişiler arasında kaldığından emin olabilirsiniz. Ne paylaşacağınızı, internette nasıl görüneceğinizi ya da sizinle kimin konuşabileceğini seçebilirsiniz."
                                ) : (
                                  <>
                                    Gizliliğiniz önceliğimizdir. Uçtan uca şifreleme ile kişisel mesajlarınızın sizinle gönderdiğiniz kişiler arasında kaldığından emin olabilirsiniz. Ne paylaşacağınızı, internette nasıl görüneceğinizi ya da sizinle kimin konuşabileceğini seçebilirsiniz.
                                    <br />
                                    <br />
                                    <br />
                                    Gizliliğiniz önceliğimizdir. Uçtan uca şifreleme ile kişisel mesajlarınızın sizinle gönderdiğiniz kişiler arasında kaldığından emin olabilirsiniz. Ne paylaşacağınızı, internette nasıl görüneceğinizi ya da sizinle kimin konuşabileceğini seçebilirsiniz.
                                  </>
                                )
                              }
                        </p>
                    </div>
                </div>
            </div>
        </main>

        <Footer />
      </div>
    )
}

export default Help