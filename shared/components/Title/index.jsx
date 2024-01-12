import styled from "styled-components"

const TitleComponent = ({ title , size , color , weight , mwidth , margin }) => {
    const Title = styled.p`
        color: ${color};
        font-family: Montserrat;
        font-size: ${size};
        font-style: normal;
        font-weight: ${weight};
        line-height: 160%; 
        max-width: ${mwidth};
        width: 100%;
        margin: ${margin};
    `
    return (
        <Title>
            {
                title
            }
        </Title>
    )
}

export default TitleComponent