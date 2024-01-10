import React from 'react'
import styled from 'styled-components'

const DescriptionC = ({ mwidth , title , margin , size , weight }) => {
    const Description = styled.p`
        max-width: ${mwidth};
        margin: ${margin};
        font-size: ${size};
        color: var(--white, #FFF);
        font-family: Poppins;
        font-style: normal;
        font-weight: ${weight};
        line-height: 130%;
    `

    return (
      <Description>
          {
              title
          }
      </Description>
    )
}

export default DescriptionC

