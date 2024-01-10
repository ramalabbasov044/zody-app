import Button from '../Button'

import { useState } from 'react'
import styled from 'styled-components'

const Header = () => {
    const [isActive,setIsActive] = useState(false) 

    const handleActive = () => {
        setIsActive(!isActive)
    } 

    return (
      <Wrapper>
          <Container>
              <LogoBody>
                <Logo
                    src="/logo/main.svg"
                    alt='Header Logo'
                />
              </LogoBody>

              <NavbarBody>
                  <Navbar>
                      <List>
                        <Item>
                          Features
                        </Item>
                      </List>
                      <List>
                        <Item>
                          Help center
                        </Item>
                      </List>
                      <List>
                        <Item>
                          Blog
                        </Item>
                      </List>
                      <List>
                        <Item>
                          Contact Us
                        </Item>
                      </List>
                  </Navbar>

                  <Right>
                      <LanguageDropdown className={isActive ? "dropdownActive": ""} style={{
                            
                        }}>
                          <LanguageActiveItem className={isActive ? "languageActiveItem": ""} onClick={handleActive}>
                                <ActiveTitle>
                                    En
                                </ActiveTitle>

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
                          </LanguageActiveItem>

                            {
                                isActive ? (
                                    <LanguageItems className={isActive ? "itemsActive" : ""}x>
                                        <LanguageItem>
                                                Az
                                        </LanguageItem>
                                        <LanguageItem>
                                                Tr
                                        </LanguageItem>
                                        <LanguageItem>
                                                Ru
                                        </LanguageItem>
                                    </LanguageItems>
                                ) : <></>
                            }
                      </LanguageDropdown>

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
                  </Right>  
              </NavbarBody>  
          </Container>
      </Wrapper>
    )
}

export default Header

const Wrapper = styled.header`
    position: relative;
    z-index: 2;

    .dropdownActive{
        background: #A67DFF !important;
        height: 119px !important;
        padding: 4px !important;
    }

    .languageActiveItem{
        padding: 0px 6px;
    }

    .itemsActive{
        top: 35px;
        padding: 0px 6px;
    }
`

const Container = styled.div`
    padding: 4px 116px 8px 116px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

const LogoBody = styled.div`
    padding: 10px;
`

const Logo = styled.img`
  
`

const NavbarBody = styled.div`
    display: flex;
    gap: 184px;
    max-height: 44px;
`

const Navbar = styled.div`
    display: flex;
    gap: 40px;
`

const List = styled.li`
    list-style-type: none;
    padding: 10px;
`

const Item = styled.a`
    color: #FFF;
    font-family: Poppins;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    cursor: pointer;
`

const Right = styled.div`
    display: flex;
    gap: 22px;
`

const LanguageDropdown = styled.div`
    position: relative;
    width: 72px;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    border-radius: 10px;
    transition: 1s;
    cursor: pointer;
    height: 44px;


    
`

const LanguageActiveItem = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const ActiveTitle = styled.p`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-family: Poppins;
`

const LanguageItems = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
    position: absolute;
    z-index: 2
`

const LanguageItem = styled.p`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    font-family: Poppins;
`