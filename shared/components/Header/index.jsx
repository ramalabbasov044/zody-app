/* eslint-disable @next/next/no-img-element */
import { Routes } from '../../constants/Routes/index'
import Button from '../Button'

import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import styles from './style.module.css'
import { useCallback, useState } from 'react'
import { activeLink } from "../../../utils/activeLink";
import Head from 'next/head'

const Header = () => {
    const { push, asPath } = useRouter();
    const [isActive, setIsActive] = useState(false);
    const [isActiveMenu, setIsActiveMenu] = useState(false);
    const { t, i18n } = useTranslation();
    const activeLanguage = i18n.language;
  
    const handleActive = () => {
      setIsActive((prevIsActive) => !prevIsActive);
    };
  
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng)
        setIsActive(true);
    }

    const isMenu = useCallback(() => {
      setIsActiveMenu(() => true);
    }, []);
  
    const languages = ['en', 'az', 'tr', 'ru'].filter((lng) => lng !== activeLanguage);
  
    return (
      <header className={styles.Wrapper}>
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
                            <a onClick={() => push(Routes.Features)} style={{fontFamily: i18n.language == "ru" ? "Montserrat" : "Poppins"}} className={`${styles.Item} ${activeLink(Routes.Features, asPath) ? styles.active : ""}`}>
                                {
                                    t('features')
                                }
                            </a>
                        </li>
                        <li className={styles.List}>
                            <a onClick={() => push(Routes.Help)} style={{fontFamily: i18n.language == "ru" ? "Montserrat" : "Poppins"}}  className={`${styles.Item} ${activeLink(Routes.Help, asPath) ? styles.active : ""}`}>
                                {
                                    t('helpCenter')
                                }
                            </a>
                        </li>
                        <li className={styles.List}>
                            <a onClick={() => push(Routes.Blog)} style={{fontFamily: i18n.language == "ru" ? "Montserrat" : "Poppins"}}  className={`${styles.Item} ${activeLink(Routes.Blog, asPath) || activeLink("Product",asPath.split("/")[1]) ? styles.active : ""}`}>
                                {
                                    t('blog')
                                }
                            </a>
                        </li>
                        <li className={styles.List}>
                            <a onClick={() => push(Routes.Contact)} style={{fontFamily: i18n.language == "ru" ? "Montserrat" : "Poppins"}}  className={`${styles.Item} ${activeLink(Routes.Contact, asPath) ? styles.active : ""}`}>
                                {
                                    t('contact')
                                }
                            </a>
                        </li>
                    </div>

                    <div className={styles.Right}>
                        <div onClick={(e) => handleActive(e)} className={`${styles.LanguageDropdown}  ${isActive ? `${styles.dropdownActive}`: ""}`} >
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
                                            {
                                                languages.map(lng => (
                                                    <p className={styles.LanguageItem} key={lng} onClick={() => changeLanguage(lng)}>
                                                        {lng}
                                                    </p>
                                                ))
                                            }
                                        </div>
                                    ) : null    
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

                <div onClick={isMenu} className={styles.Menu} >
                        <svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 13H28M10 19H28M10 25H28" stroke="#E6D7FF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                </div>

                <div style={{right: isActiveMenu ? "0" : "-100%"}} className={styles.mobileContainer}>
                    <div className={styles.mobileHeader}>
                        <svg onClick={() => push("/")} width="39" height="48" viewBox="0 0 39 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_744_2030)">
                            <g filter="url(#filter0_dd_744_2030)">
                            <path d="M34.4657 31.9189L30.9116 36.9888C30.0268 38.252 28.6088 39.0003 27.0992 39.0003H7.18686C5.70968 39.0003 4.51201 37.762 4.51201 36.2347V33.7113C4.51201 33.0864 4.64436 32.4749 4.89334 31.9189H34.4657Z" fill="url(#paint0_linear_744_2030)"/>
                            <path d="M34.5 9V9.64115C34.5 10.4871 34.1751 11.2976 33.5966 11.8957L30.1471 15.4622L29.5483 16.0813L7.38123 39H7.18686C5.70968 39 4.51201 37.7617 4.51201 36.2345V33.711C4.51201 33.0861 4.64436 32.4746 4.89334 31.9187C5.09974 31.4545 5.38851 31.0278 5.74855 30.6622L20.0909 16.0813L20.8666 15.2928L23.7154 12.3971L24.2087 11.8957L25.4629 10.6211L27.0567 9H34.5Z" fill="url(#paint1_linear_744_2030)"/>
                            <path opacity="0.4" d="M33.5967 11.8955L26.7476 18.9768H17.3032L20.1521 16.0812H6.52975L9.46375 11.8955H33.5967Z" fill="#530D6D"/>
                            <path opacity="0.2" d="M18.1778 31.9189L10.9816 39.0003H7.38123L14.2303 31.9189H18.1778Z" fill="#530D6D"/>
                            <path d="M34.5 9V9.64115C34.5 10.4871 34.1751 11.2976 33.5967 11.8957L30.1471 15.4622L29.5483 16.0813H4.5L8.05413 11.0115C8.93896 9.74833 10.3569 9 11.8665 9H34.5Z" fill="url(#paint2_linear_744_2030)"/>
                            </g>
                            </g>
                            <defs>
                            <filter id="filter0_dd_744_2030" x="-0.5" y="6" width="40" height="40.0005" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="2"/>
                            <feGaussianBlur stdDeviation="2.5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0431373 0 0 0 0 0.0431373 0 0 0 0 0.0431373 0 0 0 0.16 0"/>
                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_744_2030"/>
                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                            <feOffset dy="2"/>
                            <feGaussianBlur stdDeviation="2.5"/>
                            <feComposite in2="hardAlpha" operator="out"/>
                            <feColorMatrix type="matrix" values="0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0 0.0470588 0 0 0 0.1 0"/>
                            <feBlend mode="normal" in2="effect1_dropShadow_744_2030" result="effect2_dropShadow_744_2030"/>
                            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_744_2030" result="shape"/>
                            </filter>
                            <linearGradient id="paint0_linear_744_2030" x1="4.51201" y1="35.4596" x2="34.4657" y2="35.4596" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#A881D9"/>
                            <stop offset="0.44" stop-color="#922AB7"/>
                            <stop offset="0.99" stop-color="#3B206C"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_744_2030" x1="8.43266" y1="5.64689" x2="23.9287" y2="28.4056" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#A881D9"/>
                            <stop offset="0.44" stop-color="#922AB7"/>
                            <stop offset="0.99" stop-color="#3B206C"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_744_2030" x1="4.5" y1="12.5407" x2="34.5" y2="12.5407" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#A881D9"/>
                            <stop offset="0.44" stop-color="#922AB7"/>
                            <stop offset="0.99" stop-color="#3B206C"/>
                            </linearGradient>
                            <clipPath id="clip0_744_2030">
                            <rect width="39" height="48" rx="19.5" fill="white"/>
                            </clipPath>
                            </defs>
                        </svg>

                        <button onClick={() => setIsActiveMenu(false)} className={styles.closeButton}>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4 4L20 20" stroke="white" stroke-width="2" stroke-linecap="round"/>
                                <path d="M20 4L4 20" stroke="white" stroke-width="2" stroke-linecap="round"/>
                            </svg>
                        </button>
                    </div>

                    <div className={`${styles.NavbarBody} ${styles.NavbarActive}`}>
                            <div className={`${styles.Navbar} ${styles.NavbarItemActive}`}>
                                <li className={`${styles.List} ${styles.ListActive}`}>
                                    <a onClick={() => push(Routes.Features)} style={{fontFamily: i18n.language == "ru" ? "Montserrat" : "Poppins"}} className={`${styles.Item} ${activeLink(Routes.Features, asPath) ? styles.active : ""}`}>
                                        {
                                            t('features')
                                        }
                                    </a>
                                </li>
                                <li className={`${styles.List} ${styles.ListActive}`}>
                                    <a onClick={() => push(Routes.Help)} style={{fontFamily: i18n.language == "ru" ? "Montserrat" : "Poppins"}}  className={`${styles.Item} ${activeLink(Routes.Help, asPath) ? styles.active : ""}`}>
                                        {
                                            t('helpCenter')
                                        }
                                    </a>
                                </li>
                                <li className={`${styles.List} ${styles.ListActive}`}>
                                    <a onClick={() => push(Routes.Blog)} style={{fontFamily: i18n.language == "ru" ? "Montserrat" : "Poppins"}}  className={`${styles.Item} ${activeLink(Routes.Blog, asPath) || activeLink("Product",asPath.split("/")[1]) ? styles.active : ""}`}>
                                        {
                                            t('blog')
                                        }
                                    </a>
                                </li>
                                <li className={`${styles.List} ${styles.ListActive}`}>
                                    <a onClick={() => push(Routes.Contact)} style={{fontFamily: i18n.language == "ru" ? "Montserrat" : "Poppins"}}  className={`${styles.Item} ${activeLink(Routes.Contact, asPath) ? styles.active : ""}`}>
                                        {
                                            t('contact')
                                        }
                                    </a>
                                </li>
                            </div>
                    </div>

                    <div className={styles.mobileContent}>
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

                            <div onClick={(e) => handleActive(e)} className={`${styles.LanguageDropdown} ${styles.LanguageDropdownMobil}  ${isActive ? `${styles.dropdownActive}`: ""}`} >
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
                                            {
                                                languages.map(lng => (
                                                    <p className={styles.LanguageItem} key={lng} onClick={() => changeLanguage(lng)}>
                                                        {lng}
                                                    </p>
                                                ))
                                            }
                                        </div>
                                    ) : null    
                                }
                        </div>
                    </div>
                </div>    

                <div style={{background: isActiveMenu ? "rgba(0, 0, 0, 0.70)" : "",width: isActiveMenu ? "100%" : "0"}} className={styles.blackBackground}></div>
          </div>
      </header>
    )
}

export default Header