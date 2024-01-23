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

        <img
            src="/stars.png"
            alt='background'
            className={styles.Background}
        /> 

        <Header />

        <main className={styles.Main}>
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

                <div className={styles.mobileContent}>
                    <div onClick={() => setActiveTab(true)} className={styles.mobileItem}>
                          <div className={styles.mobileItemTop}>
                              <p style={{color: activeTab ? "#A67DFF" : '#FFFFFF'}} className={styles.mobileItemTitle}>
                                 Privacy Policy
                              </p>

                              <div>
                                  {
                                      activeTab ? (
                                          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.7886 7.95947L11.245 14.5031L4.70142 7.95947" stroke="#E6E5E5" stroke-width="1.4022" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                        ) : (
                                          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.7015 14.9175L11.2451 8.37388L17.7887 14.9175" stroke="#E6E5E5" stroke-width="1.4022" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                      )
                                  }
                              </div>
                          </div>
                          
                          {
                            activeTab ? (
                              <p className={styles.mobileDescription}>
                                Gizliliğiniz önceliğimizdir. Uçtan uca şifreleme ile kişisel mesajlarınızın sizinle gönderdiğiniz kişiler arasında kaldığından emin olabilirsiniz. Ne paylaşacağınızı, internette nasıl görüneceğinizi ya da sizinle kimin konuşabileceğini seçebilirsiniz.
                              </p>
                            ) : null
                          }
                    </div>
                    <div onClick={() => setActiveTab(false)} className={styles.mobileItem}>
                          <div className={styles.mobileItemTop}>
                              <p style={{color: !activeTab ? "#A67DFF": "#FFFFFF"}} className={styles.mobileItemTitle}>
                                Term and conditions
                              </p>

                              <div>
                                  {
                                      !activeTab ? (
                                          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.7886 7.95947L11.245 14.5031L4.70142 7.95947" stroke="#E6E5E5" stroke-width="1.4022" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                      ) : (
                                          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.7015 14.9175L11.2451 8.37388L17.7887 14.9175" stroke="#E6E5E5" stroke-width="1.4022" stroke-linecap="round" stroke-linejoin="round"/>
                                          </svg>
                                      )
                                  }
                              </div>
                          </div>
                          {
                            !activeTab ? (
                              <p className={styles.mobileDescription}>
                                Gizliliğiniz önceliğimizdir. Uçtan uca şifreleme ile kişisel mesajlarınızın sizinle gönderdiğiniz kişiler arasında kaldığından emin olabilirsiniz. Ne paylaşacağınızı, internette nasıl görüneceğinizi ya da sizinle kimin konuşabileceğini seçebilirsiniz.
                              </p>
                            ) : null
                          }
                          
                    </div>
                </div>
            </div>
        </main>

        <Footer />
      </div>
    )
}

export default Help