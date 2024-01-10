import styled from "styled-components"

const Button = ({ 
    title , color , weight , size , padding , shadow , background , radius , hoverBackground
}) => {
  
    const Button = styled.button`
        color: ${color};
        padding: ${padding};
        box-shadow: ${shadow};
        background-color: ${background};
        border: 0;
        font-size: ${size};
        font-style: normal;
        font-weight: ${weight};
        line-height: normal;
        border-radius: ${radius};
        cursor: pointer;

        &:hover{
            background-color: ${hoverBackground};
        }
    `

    return (
        <Button>
            {
                title
            }  
        </Button>
    )
}

export default Button