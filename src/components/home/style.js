import styled from 'styled-components'

export const theme = {
    white: '#ffffff',
    purple: '#e2a0ff',
    limeGreen: '#e8ffb7',
    darkPurple: '#7c6bea'
}

export const Box = styled.div`
display: flex;
align-items: center;
justify-content: center;
color: ${props => props.theme.darkPurple};
background-color: ${props => props.theme.white};
width: 100vw;
height: 100vh;
flex-direction: column;
margin-right: 5em;
overflow: hidden;

&& {
    @media (max-width: 950px){
    margin-top: 2em;
    }

    @media (max-width: 400px) {
        font-size: x-large;
    }
}

`
export const Intro = styled.p`
display: flex;
align-items: center;
justify-content: center;
padding: 2em;
text-align: justify;
font-size: xx-large;
font-family: 'Raleway', sans-serif;
flex-direction: column;

&& {
    @media (max-width: 900px) {
        font-size: x-large;
    }
}

&& {
    @media (max-width: 400px) {
        font-size: large;
        margin: 2em;

    }
}
`


export const Phrase = styled.h3`
font-size: xxx-large;
font-family: 'Abel', sans-serif;

;

`
export const Name = styled.img`
width: 50%;
height: 30%;
margin: 4em 0.5em 0.5em 0.5em;

&& {
    @media (max-width: 900px) {
        width: 50%;
        height: 20%;

    }
    @media (max-width: 400px) {
        height: 15%;
        margin: 1em 0 0 0
    }
}
`
