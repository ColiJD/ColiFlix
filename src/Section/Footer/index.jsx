import React from "react"
import styled from "styled-components"
import { primary } from "../../assets/base/Variables"
import { StyledNombre } from "../../assets/base"

const StyledFooter = styled.footer`
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1.2rem 0;
    border-top: 2px solid ${primary};
`
const Footer = () => {
    return (
        <StyledFooter>
            <StyledNombre className='header-nombre'>JDFLIX</StyledNombre>
        </StyledFooter>
    )
}
export default Footer