import DownloadBox from '@/shared/components/DownloadBox'
import Description from '@/shared/components/Description'
import Header from '@/shared/components/Header'
import Footer from '@/shared/components/Footer'

import styled from 'styled-components'
import Head from 'next/head'
import Image from 'next/image'

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

      <Main>
          <Content>
            <Top>
                <Left>
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
                  <Image
                      src="/phone/home/phone1.svg"
                      alt="phone Image"
                      width={664}
                      height={597}
                  />
                </Right>
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
                </Left>
                
                <Right>
                  <Image
                      src="/phone/home/phone1.svg"
                      alt="phone Image"
                      width={664}
                      height={597}
                  />
                </Right>
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

const Main = styled.main`
    position: relative;
    z-index: 2;
    padding: 66px 157px 114px 117px;
`

const Content = styled.div`

`

const Top = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Bottom = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const Right = styled.div``

const Left = styled.div`
`

const DownloadBoxBody = styled.div`
    display: flex;
    gap: 16px;
    margin-top: 20px;
`