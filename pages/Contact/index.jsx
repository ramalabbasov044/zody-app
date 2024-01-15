/* eslint-disable @next/next/no-img-element */
import InputComponent from '@/shared/components/Input/index'
import TextArea from '@/shared/components/TextArea/index'
import Footer from '@/shared/components/Footer'
import Header from '@/shared/components/Header'
import styles from './style.module.css'

import { ToastContainer, toast } from 'react-toastify';
import Image from 'next/image'
import { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        userName: "",
        userSurname: "",
        userEmail: "",
        userDescription: "",
    });
    const handleInputChange = (name, value) => {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };

    const sendData = () => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(formData.userName == ""){
            toast.error("Zəhmət olmasa düzgün name daxil edin")
        } else if(formData.userSurname == "") {
            toast.error("Zəhmət olmasa düzgün Soyadi daxil edin")
        } else if (emailRegex.test(formData.userEmail) == false ) {
            toast.error("Zəhmət olmasa düzgün Email daxil edin")
        }else if(formData.userDescription == "") {
          toast.error("Zəhmət olmasa düzgün Description daxil edin")
      }else{
            toast.success("Bizimle elaqe yaradildi")
            console.log(formData);
        }
    }

    return (
      <div className={styles.Wrapper}>
        <ToastContainer />

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
                         <div className={styles.instagramBox}>
                          <svg width="36" height="37" viewBox="0 0 36 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M22.5 34.9821H13.5C5.355 34.9821 1.875 31.5021 1.875 23.3571V14.3571C1.875 6.21215 5.355 2.73215 13.5 2.73215H22.5C30.645 2.73215 34.125 6.21215 34.125 14.3571V23.3571C34.125 31.5021 30.645 34.9821 22.5 34.9821ZM13.5 4.98215C6.585 4.98215 4.125 7.44215 4.125 14.3571V23.3571C4.125 30.2721 6.585 32.7321 13.5 32.7321H22.5C29.415 32.7321 31.875 30.2721 31.875 23.3571V14.3571C31.875 7.44215 29.415 4.98215 22.5 4.98215H13.5Z" fill="#A67DFF"/>
                              <path d="M17.9995 25.2321C14.4895 25.2321 11.6245 22.3671 11.6245 18.8571C11.6245 15.3471 14.4895 12.4821 17.9995 12.4821C21.5095 12.4821 24.3745 15.3471 24.3745 18.8571C24.3745 22.3671 21.5095 25.2321 17.9995 25.2321ZM17.9995 14.7321C15.7195 14.7321 13.8745 16.5771 13.8745 18.8571C13.8745 21.1371 15.7195 22.9821 17.9995 22.9821C20.2795 22.9821 22.1245 21.1371 22.1245 18.8571C22.1245 16.5771 20.2795 14.7321 17.9995 14.7321Z" fill="#A67DFF"/>
                              <path d="M25.5005 12.1071C25.3055 12.1071 25.1105 12.0621 24.9305 11.9871C24.7505 11.9121 24.5855 11.8071 24.4355 11.6721C24.3005 11.5221 24.1805 11.3571 24.1055 11.1771C24.0305 10.9971 24.0005 10.8021 24.0005 10.6071C24.0005 10.4121 24.0305 10.2171 24.1055 10.0371C24.1955 9.84214 24.3005 9.69214 24.4355 9.54214C24.5105 9.48214 24.5855 9.40714 24.6605 9.36214C24.7505 9.30214 24.8405 9.25714 24.9305 9.22714C25.0205 9.18214 25.1105 9.15214 25.2155 9.13714C25.6955 9.03214 26.2055 9.19714 26.5655 9.54214C26.7005 9.69214 26.8055 9.84214 26.8805 10.0371C26.9555 10.2171 27.0005 10.4121 27.0005 10.6071C27.0005 10.8021 26.9555 10.9971 26.8805 11.1771C26.8055 11.3571 26.7005 11.5221 26.5655 11.6721C26.4155 11.8071 26.2505 11.9121 26.0705 11.9871C25.8905 12.0621 25.6955 12.1071 25.5005 12.1071Z" fill="#A67DFF"/>
                            </svg>
                         </div>
                         <div className={styles.tiktokBox}>
                          <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="1" y="1.85715" width="30" height="30" rx="8" stroke="#A67DFF" stroke-width="2"/>
                            <g clip-path="url(#clip0_567_3494)">
                            <path d="M17.25 6.85715H19.725C19.905 7.7509 20.4 8.8784 21.2688 9.99715C22.1188 11.0934 23.2463 11.8571 24.75 11.8571V14.3571C22.5588 14.3571 20.9125 13.3396 19.75 12.0709V20.6071C19.75 21.8433 19.3834 23.0517 18.6967 24.0795C18.0099 25.1073 17.0338 25.9083 15.8918 26.3814C14.7497 26.8544 13.4931 26.9782 12.2807 26.7371C11.0683 26.4959 9.95466 25.9006 9.08059 25.0266C8.20651 24.1525 7.61125 23.0388 7.37009 21.8265C7.12894 20.6141 7.25271 19.3574 7.72576 18.2154C8.1988 17.0733 8.99988 16.0972 10.0277 15.4105C11.0555 14.7237 12.2639 14.3571 13.5 14.3571V16.8571C12.7583 16.8571 12.0333 17.0771 11.4166 17.4891C10.7999 17.9012 10.3193 18.4869 10.0355 19.1721C9.75163 19.8573 9.67736 20.6113 9.82206 21.3387C9.96675 22.0662 10.3239 22.7344 10.8484 23.2588C11.3728 23.7832 12.041 24.1404 12.7684 24.2851C13.4958 24.4298 14.2498 24.3555 14.9351 24.0717C15.6203 23.7879 16.206 23.3072 16.618 22.6905C17.0301 22.0739 17.25 21.3488 17.25 20.6071V6.85715Z" fill="#A67DFF"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_567_3494">
                            <rect width="20" height="20" fill="white" transform="translate(6 6.85715)"/>
                            </clipPath>
                            </defs>
                          </svg>

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
                              name={"userName"}
                              placeholder={"Name"}
                              value={formData.userName}
                              onInputChange={handleInputChange}
                          />

                          <InputComponent
                              path={"/input/user.svg"}
                              activePath={"/input/user2.svg"}
                              type={"text"}
                              name={"userSurname"}
                              placeholder={"Surname"}
                              value={formData.userSurname}
                              onInputChange={handleInputChange}
                          />

                          <InputComponent
                              path={"/input/mail.svg"}
                              activePath={"/input/mail2.svg"}
                              type={"text"}
                              name={"userEmail"}
                              placeholder={"Mail"}
                              value={formData.userEmail}
                              onInputChange={handleInputChange}
                          />

                          <TextArea
                              type={"text"}
                              name={"userDescription"}
                              placeholder={"What do you want to tell us about ?"}
                              value={formData.userDescription}
                              onInputChange={handleInputChange}
                          />
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