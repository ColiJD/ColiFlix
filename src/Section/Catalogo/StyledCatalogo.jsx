
import styled from 'styled-components';


export const StyledCatalogo = styled.section`
    padding: 0 2.5rem;
    margin: 0;
    box-sizing: border-box;
    background-color: #000;
`
export const StyledImagenes = styled.img`
    width: 320px;
    height: 200px;

    @media screen and (min-width:1280px){
        width: 300px;
    }

`
export const StyledDivContent = styled.div`
    margin-left: 10px;
`

export const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

