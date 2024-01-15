/* eslint-disable @next/next/no-img-element */
import { Routes } from '../../constants/Routes/index'
import Button from '../Button'

import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import styles from './style.module.css'
import { useState } from 'react'
import { activeLink } from "../../../utils/activeLink";

const Header = () => {
    const { push , asPath } = useRouter()
    const [isActive, setIsActive] = useState(false);
    const { t, i18n } = useTranslation();
    const activeLanguage = i18n.language; 
    const handleActive = () => {
        setIsActive(!isActive);
    };

    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        setIsActive(false); 
    };

    const languages = ['en', 'az', 'tr', 'ru'].filter(lng => lng !== activeLanguage);

    return (
      <div className={styles.Wrapper}>
          <div className={styles.Container}>
              <div className={styles.LogoBody}>
                <img
                    src="/logo/main.svg"
                    alt='Header Logo'
                    className={styles.Logo}
                    onClick={() => push("/")}
                />
              </div>

              <div className={styles.NavbarBody}>
                  <div className={styles.Navbar}>
                      <li className={styles.List}>
                        <a onClick={() => push(Routes.Features)} className={`${styles.Item} ${activeLink(Routes.Features, asPath) ? styles.active : ""}`}>
                            {
                                t('features')
                            }
                        </a>
                      </li>
                      <li className={styles.List}>
                        <a onClick={() => push(Routes.Help)} className={`${styles.Item} ${activeLink(Routes.Help, asPath) ? styles.active : ""}`}>
                            {
                                t('helpCenter')
                            }
                        </a>
                      </li>
                      <li className={styles.List}>
                        <a onClick={() => push(Routes.Blog)} className={`${styles.Item} ${activeLink(Routes.Blog, asPath) || activeLink("Product",asPath.split("/")[1]) ? styles.active : ""}`}>
                            {
                                t('blog')
                            }
                        </a>
                      </li>
                      <li className={styles.List}>
                        <a onClick={() => push(Routes.Contact)} className={`${styles.Item} ${activeLink(Routes.Contact, asPath) ? styles.active : ""}`}>
                            {
                                t('contact')
                            }
                        </a>
                      </li>
                  </div>

                  <div className={styles.Right}>
                      <div onClick={handleActive} className={`${styles.LanguageDropdown}  ${isActive ? `${styles.dropdownActive}`: ""}`} >
                          <div className={`${styles.LanguageActiveItem} ${isActive ? `${styles.languageActiveItem}`: ""}`} >
                                <p className={styles.ActiveTitle}>
                                    {
                                        i18n.language
                                    }
                                </p>

                                {
                                    isActive ? (
                                        <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M4.58335 14.2083L11 7.79166L17.4167 14.2083" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    ) : (
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.5 8.5L12.5 15.5L5.5 8.5" stroke="#E6E5E5" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    )
                                }
                          </div>

                            {
                                isActive ? (
                                    <div className={`${styles.LanguageItems} ${isActive ? `${styles.itemsActive}` : ""}`}>
                                        {languages.map(lng => (
                                            <p className={styles.LanguageItem} key={lng} onClick={() => changeLanguage(lng)}>
                                                {lng}
                                            </p>
                                        ))}
                                    </div>
                                ) : <></>
                            }
                      </div>

                      <Button 
                          shadow={"none"}
                          size={"16px"}
                          weight={"500"}
                          color={"#FFF"}
                          radius={"1000px"}
                          title={"Download"} 
                          padding={"10px 17.87px"}
                          background={"#A67DFF"}
                          hoverBackground={"#7D57CE"}
                      />
                  </div>  
              </div>  
          </div>
      </div>
    )
}

export default Header