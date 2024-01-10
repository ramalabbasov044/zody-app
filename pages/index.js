import Header from '@/shared/components/Header'

import styled from 'styled-components'
import Head from 'next/head'

export default function Home() {
  return (
    <Wrapper>
      <Head>
          <title>Home Page</title>
          <link rel="icon" href="/logo/main.svg" />
      </Head>

      <Header />

      <Logo
          src="/home/bg.svg"
          alt='background'
      />

      <main>
        
      </main>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
`


const Logo = styled.img`
    width: 100vw !important;
    height: 2000px !important;
    background: black;
    position: absolute;
    top: 0px;
    left: 0px;
    object-fit: cover;
`