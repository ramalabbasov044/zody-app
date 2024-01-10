import React from 'react'
import styled from 'styled-components'
import Button from '../Button'

const Header = () => {

    return (
      <Wrapper>
          <Container>
              <LogoBody>
                <Logo
                    src="/logo/main.svg"
                    alt='asda'
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
                      <LanguageDropdown>
                          <LanguageActiveItem>
                                Test123
                          </LanguageActiveItem>

                          <LanguageItems>
                              <LanguageItem>
                              </LanguageItem>
                          </LanguageItems>
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
    z-index: 1;
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
  
`

const LanguageActiveItem = styled.p`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const LanguageItems = styled.div`
    display: flex;
    flex-direction: column;
`

const LanguageItem = styled.p`
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`