import Image from 'next/image'
import styled from 'styled-components'

const DownloadBox = ({ path , title , type  }) => {
  return (
    <Box>
        <Image
            src={path}
            alt={title}
            width={42}
            height={42}
        />

        <About>
            <Title>
                {
                    title
                }
            </Title>

            <Type>
                {
                    type
                }
            </Type>
        </About>
    </Box>
  )
}

export default DownloadBox

const Box = styled.div`
    cursor: pointer;
    padding: 16px 21px 16px 18px;
    display: flex;
    gap: 12px;
    border-radius: 20px;
    border: 1px solid #FFD336;
    background: var(--Purple-2, #6032C6);
    box-shadow: 0px 1px 20px 7px rgba(32, 14, 63, 0.16);
    background: radial-gradient(56.08% 56.08% at 50% 50%, #2C135B 36.5%, rgba(51, 25, 99, 0.92) 82%, rgba(59, 32, 108, 0.93) 100%);
`

const About = styled.div`
    display: flex;
    flex-direction: column;
    gap: 3.94px;    
`

const Title = styled.div`
    color: #DDD;
    font-family: Montserrat;
    font-size: 10.511px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
`

const Type = styled.div`
    color: #FFF;
    font-family: Montserrat;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`