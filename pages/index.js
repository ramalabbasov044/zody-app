import DownloadBox from '@/shared/components/DownloadBox'
import Description from '@/shared/components/Description'
import Header from '@/shared/components/Header'
import Footer from '@/shared/components/Footer'
import Title from '@/shared/components/Title'

import styled from 'styled-components'
import Image from 'next/image'
import Head from 'next/head'

export default function Home() {
  return (
    <Wrapper>
      <Head>
          <title>Home </title>
          <link rel="icon" href="/logo/main.svg" />
      </Head>

      <Header />

      <Background
          src="/home/bg.svg"
          alt='background'
      />

      <Background2
          src="/home/bg2.svg"
          alt='background'
      />

      <Main>
          <Content>
            <Top>
                <Left>
                  <Image
                      src="/pins/pin1.svg"
                      alt="pin"
                      width={166}
                      height={65}
                  />

                  <Description
                      title={"Download Now Start using it!"}
                      margin={"7.47px"}
                      mwidth={"377px"}
                      weight={500}
                      size={"50px"}
                  />

                  <DownloadBoxBody>
                        <DownloadBox
                            path={"/apple/logo/logo.svg"}
                            title={"Zody Horoscope & Dating"}
                            type={"IOS"}
                         />

                        <DownloadBox
                            path={"/market/logo/logo.svg"}
                            title={"Zody Horoscope & Dating"}
                            type={"ANDROID"}
                        />
                    </DownloadBoxBody>
                </Left>

                <Right>
                    <TopImage
                        src="/phone/home/phone1.svg"
                        alt="phone Image"
                        width={664}
                        height={597}
                    />

                    <Vector
                            src="/pins/pin2.svg"
                            alt="pin2"
                    />

                    <Vector2
                            src="/pins/pin3.svg"
                            alt="pin2"
                    />
                </Right>

                <BottomArrow>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2683 20.7072C11.4558 20.8947 11.7101 21 11.9753 21C12.2404 21 12.4948 20.8947 12.6823 20.7072L18.3393 15.0502C18.4348 14.958 18.511 14.8476 18.5634 14.7256C18.6158 14.6036 18.6434 14.4724 18.6445 14.3396C18.6457 14.2068 18.6204 14.0752 18.5701 13.9523C18.5198 13.8294 18.4456 13.7177 18.3517 13.6238C18.2578 13.5299 18.1461 13.4557 18.0232 13.4054C17.9003 13.3551 17.7687 13.3298 17.6359 13.331C17.5031 13.3321 17.3719 13.3597 17.2499 13.4121C17.1279 13.4645 17.0175 13.5407 16.9253 13.6362L12.9753 17.5862L12.9753 4.34321C12.9753 4.078 12.8699 3.82364 12.6824 3.63611C12.4949 3.44857 12.2405 3.34321 11.9753 3.34321C11.7101 3.34321 11.4557 3.44857 11.2682 3.63611C11.0806 3.82364 10.9753 4.078 10.9753 4.34321L10.9753 17.5862L7.02528 13.6362C6.83668 13.4541 6.58408 13.3533 6.32188 13.3555C6.05969 13.3578 5.80887 13.463 5.62347 13.6484C5.43806 13.8338 5.33289 14.0846 5.33061 14.3468C5.32833 14.609 5.42912 14.8616 5.61128 15.0502L11.2683 20.7072Z" fill="white"/>
                    </svg>
                </BottomArrow>
            </Top>

            <Bottom>
                <Left>
                    <Description
                        title={"Discover"}
                        margin={"7.47px"}
                        mwidth={"377px"}
                        weight={500}
                        size={"50px"}
                    />
                    <Title
                        title={'Explore a world of astrological insights and connect with like-minded individuals to unlock the secrets of the stars. Delve into daily horoscopes, comprehensive natal charts, and relationship synastry that guides and enlightens your path, while the collective wisdom of a vibrant community offers support and perspective on your astrological journey.'}
                        size={"18px"}
                        color={"#fff"}
                        weight={400}
                        mwidth={"463px"}
                        margin={"10px"}
                    />
                </Left>
                
                <Right>
                  <RightImage
                      src="/phone/home/phone3.svg"
                      alt="phone Image"
                  />
                </Right>

                <BottomArrow>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11.2683 20.7072C11.4558 20.8947 11.7101 21 11.9753 21C12.2404 21 12.4948 20.8947 12.6823 20.7072L18.3393 15.0502C18.4348 14.958 18.511 14.8476 18.5634 14.7256C18.6158 14.6036 18.6434 14.4724 18.6445 14.3396C18.6457 14.2068 18.6204 14.0752 18.5701 13.9523C18.5198 13.8294 18.4456 13.7177 18.3517 13.6238C18.2578 13.5299 18.1461 13.4557 18.0232 13.4054C17.9003 13.3551 17.7687 13.3298 17.6359 13.331C17.5031 13.3321 17.3719 13.3597 17.2499 13.4121C17.1279 13.4645 17.0175 13.5407 16.9253 13.6362L12.9753 17.5862L12.9753 4.34321C12.9753 4.078 12.8699 3.82364 12.6824 3.63611C12.4949 3.44857 12.2405 3.34321 11.9753 3.34321C11.7101 3.34321 11.4557 3.44857 11.2682 3.63611C11.0806 3.82364 10.9753 4.078 10.9753 4.34321L10.9753 17.5862L7.02528 13.6362C6.83668 13.4541 6.58408 13.3533 6.32188 13.3555C6.05969 13.3578 5.80887 13.463 5.62347 13.6484C5.43806 13.8338 5.33289 14.0846 5.33061 14.3468C5.32833 14.609 5.42912 14.8616 5.61128 15.0502L11.2683 20.7072Z" fill="white"/>
                    </svg>
                </BottomArrow>
            </Bottom>
          </Content>
      </Main>

      <Footer />
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`


const Background = styled.img`
    width: 100vw !important;
    height: 100% !important;
    background: black;
    position: absolute;
    top: 0px;
    left: 0px;
    object-fit: cover;
    z-index: 0;
`

const Background2 = styled.img`
  position: absolute;
  width: 100%;
  height: 857px;
  top: 0;
  left: 0;
`

const Main = styled.main`
    position: relative;
    z-index: 1;
    display: flex;
    justify-content: center;
`

const Content = styled.div`
    max-width: 1512px;
`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 98px;
    position: relative;
    padding: 66px 157px 114px 117px;

`

const Bottom = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 73px 137px 34px 116px;
`

const Right = styled.div`
    position: relative;
`

const Left = styled.div`
`

const DownloadBoxBody = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 20px;
`

const BottomArrow = styled.div`
    left: 50%;
    bottom: 0;
    max-width: 100%;
    position: absolute;
    transform: translate(-50%,-50%);
    cursor: pointer;
`

const Vector = styled.img`
    position: absolute;
    top: -24px;
    right: 0;
    z-index: -1;
`

const Vector2 = styled.img`
    position: absolute;
    bottom: -24px;
    left: 0;
    z-index: -1;
`

const RightImage = styled.img`
    max-width: 718.94px;
    max-height: 779.62px;
    width: 100%;
    height: 100%;
`

const TopImage = styled.img`
    max-width: 664px;
    max-height: 597px;
    width: 100%;
    height: 100%;
`