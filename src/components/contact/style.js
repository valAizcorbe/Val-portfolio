import styled from 'styled-components';

export const theme = {
    white: '#ffffff',
    purple: '#e2a0ff',
    limeGreen: '#e8ffb7',
    darkPurple: '#7c6bea'
}

export const ContactBox = styled.body`
display: flex;
justify-content: center;
align-items: center;
background-color: ${props => props.theme.white};
color: ${props => props.theme.purple};
width: 100vw;
height: 100vh;
font-size: xx-large;
margin-right: 5em;
overflow: hidden;
& {
    @media (max-width: 950px){
        margin-top: 5em;
    }
    @media (max-width: 400px){
        margin-top: 0em;
        font-size: x-large;

    }
}

& a{
    text-decoration: none;
    
}
`

export const TextSection = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

export const Title = styled.h1`
font-family: 'Raleway', sans-serif;
`

export const Button = styled.button`
border: 3px solid;
border-color: #7c6bea;
background-color: transparent;
color: #7c6bea;
border-radius: 30px;
width: 12em;
height: 3em;
margin-bottom: 2em;
font-family: 'Abel', sans-serif;
font-weight: bolder;
font-size: x-large;

    &:hover {
        background-color: #7c6bea;
        color: #e8ffb7; }
        
    &:focus { outline: none; }

    && {
        @media (max-width: 950px){
            margin: 1em;
            font-size: large;
        }
        @media (max-width: 400px){
            margin: 1em ;
        }
    }
`