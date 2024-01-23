/* eslint-disable @next/next/no-img-element */
import InputComponent from '@/shared/components/Input/index'
import TextArea from '@/shared/components/TextArea/index'
import Footer from '@/shared/components/Footer'
import Header from '@/shared/components/Header'
import styles from './style.module.css'

import { ToastContainer, toast } from 'react-toastify';
import { contactUs } from '../../services/index'
import Image from 'next/image'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'
// 107 116
function Contact() {
    const { i18n } = useTranslation()
    const [instagramHover,setInstagramHover] = useState(false)
    const [tiktokHover,setTiktokHover] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        surname: "",
        email: "",
        body: "",
    });
   
    const handleInputChange = (name, value) => {
      if (name === "body" && value.length > 200) {
        toast.error("description uzunlugu maksimum 200 ola biler");
      } else {
        setFormData((prevData) => ({
          ...prevData,
          [name]: value,
        }));
      }
    };

    const sendData = async () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(formData.name == ""){
            toast.error("Zəhmət olmasa düzgün name daxil edin")
        } else if(formData.surname == "") {
            toast.error("Zəhmət olmasa düzgün Soyadi daxil edin")
        } else if (emailRegex.test(formData.email) == false ) {
            toast.error("Zəhmət olmasa düzgün Email daxil edin")
        }else if(formData.body == "") {
          toast.error("Zəhmət olmasa düzgün Description daxil edin")
        }else{
            let data ={
                "name": formData.name,
                "surname": formData.surname,
                "email": formData.email,
                "body": formData.body
            };
            const response = await contactUs(data)
            console.log(response)
            if(response.status == 200){
              toast.success("Bizimle elaqe yaradildi")
            }else{
              toast.error("Bizimle elaqe yaradildilarkən prablem oldu")
            }
        }
          
    }

    return (
      <div className={styles.Wrapper}>
        <ToastContainer />

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
          
          <main className={styles.Main}>
              <div className={styles.content}>
                  <div className={styles.left}>
                      <p className={styles.headTitle}>
                          Contact Us
                      </p>
                      <div className={styles.email}>
                        <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M24.4287 30.5H10.143C4.92871 30.5 1.92871 27.5 1.92871 22.2857V12.2857C1.92871 7.07143 4.92871 4.07143 10.143 4.07143H24.4287C29.643 4.07143 32.643 7.07143 32.643 12.2857V22.2857C32.643 27.5 29.643 30.5 24.4287 30.5ZM10.143 6.21428C6.05728 6.21428 4.07157 8.2 4.07157 12.2857V22.2857C4.07157 26.3714 6.05728 28.3571 10.143 28.3571H24.4287C28.5144 28.3571 30.5001 26.3714 30.5001 22.2857V12.2857C30.5001 8.2 28.5144 6.21428 24.4287 6.21428H10.143Z" fill="white"/>
                          <path d="M17.2855 18.5285C16.0855 18.5285 14.8713 18.1571 13.9427 17.4L9.47125 13.8285C9.01411 13.4571 8.9284 12.7857 9.29983 12.3285C9.67126 11.8714 10.3427 11.7857 10.7998 12.1571L15.2712 15.7285C16.357 16.6 18.1998 16.6 19.2855 15.7285L23.757 12.1571C24.2141 11.7857 24.8998 11.8571 25.257 12.3285C25.6284 12.7857 25.557 13.4714 25.0855 13.8285L20.6141 17.4C19.6998 18.1571 18.4855 18.5285 17.2855 18.5285Z" fill="white"/>
                        </svg>

                        <p className={styles.emailText}>
                          info@quantubyte.com
                        </p>
                      </div>

                      <p className={styles.followTitle}>
                        Follow Us
                      </p>

                      <div className={styles.boxBody}>
                         <div className={styles.instagramBox} onMouseEnter={() => setInstagramHover(true)} onMouseLeave={() => setInstagramHover(false)}>
                            {
                              instagramHover ? (
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M22.5 34.125H13.5C5.355 34.125 1.875 30.645 1.875 22.5V13.5C1.875 5.355 5.355 1.875 13.5 1.875H22.5C30.645 1.875 34.125 5.355 34.125 13.5V22.5C34.125 30.645 30.645 34.125 22.5 34.125ZM13.5 4.125C6.585 4.125 4.125 6.585 4.125 13.5V22.5C4.125 29.415 6.585 31.875 13.5 31.875H22.5C29.415 31.875 31.875 29.415 31.875 22.5V13.5C31.875 6.585 29.415 4.125 22.5 4.125H13.5Z" fill="#E6D7FF"/>
                                  <path d="M17.9995 24.375C14.4895 24.375 11.6245 21.51 11.6245 18C11.6245 14.49 14.4895 11.625 17.9995 11.625C21.5095 11.625 24.3745 14.49 24.3745 18C24.3745 21.51 21.5095 24.375 17.9995 24.375ZM17.9995 13.875C15.7195 13.875 13.8745 15.72 13.8745 18C13.8745 20.28 15.7195 22.125 17.9995 22.125C20.2795 22.125 22.1245 20.28 22.1245 18C22.1245 15.72 20.2795 13.875 17.9995 13.875Z" fill="#E6D7FF"/>
                                  <path d="M25.5005 11.25C25.3055 11.25 25.1105 11.205 24.9305 11.13C24.7505 11.055 24.5855 10.95 24.4355 10.815C24.3005 10.665 24.1805 10.5 24.1055 10.32C24.0305 10.14 24.0005 9.94498 24.0005 9.74998C24.0005 9.55498 24.0305 9.35998 24.1055 9.17998C24.1955 8.98498 24.3005 8.83498 24.4355 8.68498C24.5105 8.62498 24.5855 8.54998 24.6605 8.50498C24.7505 8.44498 24.8405 8.39998 24.9305 8.36998C25.0205 8.32498 25.1105 8.29498 25.2155 8.27998C25.6955 8.17498 26.2055 8.33998 26.5655 8.68498C26.7005 8.83498 26.8055 8.98498 26.8805 9.17998C26.9555 9.35998 27.0005 9.55498 27.0005 9.74998C27.0005 9.94498 26.9555 10.14 26.8805 10.32C26.8055 10.5 26.7005 10.665 26.5655 10.815C26.4155 10.95 26.2505 11.055 26.0705 11.13C25.8905 11.205 25.6955 11.25 25.5005 11.25Z" fill="#E6D7FF"/>
                                </svg>
                              ) : (
                                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M22.5 34.125H13.5C5.355 34.125 1.875 30.645 1.875 22.5V13.5C1.875 5.355 5.355 1.875 13.5 1.875H22.5C30.645 1.875 34.125 5.355 34.125 13.5V22.5C34.125 30.645 30.645 34.125 22.5 34.125ZM13.5 4.125C6.585 4.125 4.125 6.585 4.125 13.5V22.5C4.125 29.415 6.585 31.875 13.5 31.875H22.5C29.415 31.875 31.875 29.415 31.875 22.5V13.5C31.875 6.585 29.415 4.125 22.5 4.125H13.5Z" fill="#A67DFF"/>
                                  <path d="M17.9995 24.375C14.4895 24.375 11.6245 21.51 11.6245 18C11.6245 14.49 14.4895 11.625 17.9995 11.625C21.5095 11.625 24.3745 14.49 24.3745 18C24.3745 21.51 21.5095 24.375 17.9995 24.375ZM17.9995 13.875C15.7195 13.875 13.8745 15.72 13.8745 18C13.8745 20.28 15.7195 22.125 17.9995 22.125C20.2795 22.125 22.1245 20.28 22.1245 18C22.1245 15.72 20.2795 13.875 17.9995 13.875Z" fill="#A67DFF"/>
                                  <path d="M25.5005 11.25C25.3055 11.25 25.1105 11.205 24.9305 11.13C24.7505 11.055 24.5855 10.95 24.4355 10.815C24.3005 10.665 24.1805 10.5 24.1055 10.32C24.0305 10.14 24.0005 9.94498 24.0005 9.74998C24.0005 9.55498 24.0305 9.35998 24.1055 9.17998C24.1955 8.98498 24.3005 8.83498 24.4355 8.68498C24.5105 8.62498 24.5855 8.54998 24.6605 8.50498C24.7505 8.44498 24.8405 8.39998 24.9305 8.36998C25.0205 8.32498 25.1105 8.29498 25.2155 8.27998C25.6955 8.17498 26.2055 8.33998 26.5655 8.68498C26.7005 8.83498 26.8055 8.98498 26.8805 9.17998C26.9555 9.35998 27.0005 9.55498 27.0005 9.74998C27.0005 9.94498 26.9555 10.14 26.8805 10.32C26.8055 10.5 26.7005 10.665 26.5655 10.815C26.4155 10.95 26.2505 11.055 26.0705 11.13C25.8905 11.205 25.6955 11.25 25.5005 11.25Z" fill="#A67DFF"/>
                                </svg>
                              )
                            }
                         </div>
                         <div className={styles.tiktokBox} onMouseEnter={() => setTiktokHover(true)} onMouseLeave={() => setTiktokHover(false)}>
                          {
                            tiktokHover ? (
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="30" height="30" rx="8" stroke="#E6D7FF" stroke-width="2"/>
                                  <g clip-path="url(#clip0_341_9463)">
                                    <path d="M17.25 6H19.725C19.905 6.89375 20.4 8.02125 21.2688 9.14C22.1188 10.2363 23.2463 11 24.75 11V13.5C22.5588 13.5 20.9125 12.4825 19.75 11.2138V19.75C19.75 20.9861 19.3834 22.1945 18.6967 23.2223C18.0099 24.2501 17.0338 25.0512 15.8918 25.5243C14.7497 25.9973 13.4931 26.1211 12.2807 25.8799C11.0683 25.6388 9.95466 25.0435 9.08059 24.1694C8.20651 23.2953 7.61125 22.1817 7.37009 20.9693C7.12894 19.7569 7.25271 18.5003 7.72576 17.3582C8.1988 16.2162 8.99988 15.2401 10.0277 14.5533C11.0555 13.8666 12.2639 13.5 13.5 13.5V16C12.7583 16 12.0333 16.2199 11.4166 16.632C10.7999 17.044 10.3193 17.6297 10.0355 18.3149C9.75163 19.0002 9.67736 19.7542 9.82206 20.4816C9.96675 21.209 10.3239 21.8772 10.8484 22.4017C11.3728 22.9261 12.041 23.2833 12.7684 23.4279C13.4958 23.5726 14.2498 23.4984 14.9351 23.2146C15.6203 22.9307 16.206 22.4501 16.618 21.8334C17.0301 21.2167 17.25 20.4917 17.25 19.75V6Z" fill="#E6D7FF"/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_341_9463">
                                      <rect width="20" height="20" fill="white" transform="translate(6 6)"/>
                                    </clipPath>
                                  </defs>
                              </svg>
                            ) : (
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect x="1" y="1" width="30" height="30" rx="8" stroke="#A67DFF" stroke-width="2"/>
                                  <g clip-path="url(#clip0_341_9463)">
                                    <path d="M17.25 6H19.725C19.905 6.89375 20.4 8.02125 21.2688 9.14C22.1188 10.2363 23.2463 11 24.75 11V13.5C22.5588 13.5 20.9125 12.4825 19.75 11.2138V19.75C19.75 20.9861 19.3834 22.1945 18.6967 23.2223C18.0099 24.2501 17.0338 25.0512 15.8918 25.5243C14.7497 25.9973 13.4931 26.1211 12.2807 25.8799C11.0683 25.6388 9.95466 25.0435 9.08059 24.1694C8.20651 23.2953 7.61125 22.1817 7.37009 20.9693C7.12894 19.7569 7.25271 18.5003 7.72576 17.3582C8.1988 16.2162 8.99988 15.2401 10.0277 14.5533C11.0555 13.8666 12.2639 13.5 13.5 13.5V16C12.7583 16 12.0333 16.2199 11.4166 16.632C10.7999 17.044 10.3193 17.6297 10.0355 18.3149C9.75163 19.0002 9.67736 19.7542 9.82206 20.4816C9.96675 21.209 10.3239 21.8772 10.8484 22.4017C11.3728 22.9261 12.041 23.2833 12.7684 23.4279C13.4958 23.5726 14.2498 23.4984 14.9351 23.2146C15.6203 22.9307 16.206 22.4501 16.618 21.8334C17.0301 21.2167 17.25 20.4917 17.25 19.75V6Z" fill="#A67DFF"/>
                                  </g>
                                  <defs>
                                    <clipPath id="clip0_341_9463">
                                      <rect width="20" height="20" fill="white" transform="translate(6 6)"/>
                                    </clipPath>
                                  </defs>
                              </svg>
                            )
                          } 

                         </div>
                      </div>
                  </div>

                  <div className={styles.form}>
                      <p className={styles.formTitle}>
                        Write to us
                      </p>

                      <div className={styles.inputBody}> 
                          <InputComponent
                              path={"/input/user.svg"}
                              activePath={"/input/user2.svg"}
                              type={"text"}
                              name={"name"}
                              placeholder={"Name"}
                              value={formData.name}
                              onInputChange={handleInputChange}
                          />

                          <InputComponent
                              path={"/input/user.svg"}
                              activePath={"/input/user2.svg"}
                              type={"text"}
                              name={"surname"}
                              placeholder={"Surname"}
                              value={formData.surname}
                              onInputChange={handleInputChange}
                          />

                          <InputComponent
                              path={"/input/mail.svg"}
                              activePath={"/input/mail2.svg"}
                              type={"text"}
                              name={"email"}
                              placeholder={"Mail"}
                              value={formData.email}
                              onInputChange={handleInputChange}
                          />

                          <TextArea
                              type={"text"}
                              name={"body"}
                              placeholder={"What do you want to tell us about ?"}
                              value={formData.body}
                              onInputChange={handleInputChange}
                          />

                          <div className={styles.characterLength}>
                            {formData.body.length}/200
                          </div>
                      </div>

                      <button onClick={sendData} className={styles.sendButton}>
                        Send
                      </button>
                  </div>
              </div>
          </main>
        <Footer />
      </div>
    )
}
export default Contact